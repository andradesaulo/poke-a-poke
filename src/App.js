import "./styles.css";
import { useState } from "react";
import data from "./data";
import createFaces from "./functions";

import Face from "./Face";
import Score from "./Score";
import Form from "./Form.js";

const App = () => {
  const [gameFaces, setGameFaces] = useState(
    createFaces(
      24,
      data.faceFeatures,
      data.faceKeys,
      data.faceTitles,
      data.faceNames
    )
  );
  const [playerFaces, setPlayerFaces] = useState(gameFaces);
  const [opponentFaces, setOpponentFaces] = useState(gameFaces);
  const [opponentFaceTarget, setOpponentFaceTarget] = useState(
    gameFaces[Math.ceil(Math.random() * gameFaces.length)]
  );
  const [playerFaceTarget, setPlayerFaceTarget] = useState(
    gameFaces[Math.ceil(Math.random() * gameFaces.length)]
  );

  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  const resetGame = () => {
    setGameFaces(
      createFaces(
        24,
        data.faceFeatures,
        data.faceKeys,
        data.faceTitles,
        data.faceNames
      )
    );
    setPlayerFaces(gameFaces);
    setOpponentFaces(gameFaces);
    setPlayerFaceTarget(gameFaces[Math.ceil(Math.random() * gameFaces.length)]);
    setOpponentFaceTarget(
      gameFaces[Math.ceil(Math.random() * gameFaces.length)]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedAttribute = document
      .querySelectorAll("select")
      .values()
      .toArray()
      .filter((elem) => elem.value !== "")[0];

    function turnFaces(faces, target, attribute) {
      return faces.map((face) =>
        target[attribute.name] === attribute.value
          ? face[attribute.name] === attribute.value
            ? { ...face }
            : { ...face, visible: false }
          : face[attribute.name] === attribute.value
          ? { ...face, visible: false }
          : { ...face }
      );
    }

    if (selectedAttribute) {
      let turnedFaces = turnFaces(
        opponentFaces,
        opponentFaceTarget,
        selectedAttribute
      );

      setOpponentFaces(turnedFaces);

      if (turnedFaces.filter((face) => face.visible).length === 1) {
        setPlayerScore(playerScore + 1);
        return;
      }

      const randomNumber1 = Math.floor(Math.random() * data.faceKeys.length);
      const randomNumber2 = Math.floor(Math.random() * data.faceKeys.length);

      selectedAttribute = {
        name: data.faceKeys[randomNumber1],
        value: data.faceFeatures[randomNumber1][randomNumber2],
      };

      turnedFaces = turnFaces(playerFaces, playerFaceTarget, selectedAttribute);
      setPlayerFaces(turnedFaces);

      if (turnedFaces.filter((face) => face.visible).length === 1) {
        setOpponentScore(opponentScore + 1);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="board">
          <ul className="opponentFaces">
            {opponentFaces.map((face, i) => {
              return (
                <li key={i} style={{ display: "inline-block" }}>
                  <Face id={i} face={face} type={"opponent"} />
                </li>
              );
            })}
          </ul>
          <Score opponentScore={opponentScore} playerScore={playerScore} />
          <ul className="playerFaces">
            {playerFaces.map((face, i) => {
              return (
                <li key={i} style={{ display: "inline-block" }}>
                  <Face
                    id={i}
                    face={face}
                    type={"player"}
                    name={data.faceNames[i]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="playerInterface">
          <div className="announcer">
            <div className="announcerMessages">
              <p>
                teste teste teste teste teste teste teste teste lorem ipsum
                lorem ipsum
              </p>
              <p>teste teste teste teste teste teste teste teste</p>
              <p>teste teste teste teste teste teste teste teste</p>
              <p>
                teste teste teste teste teste teste teste teste lorem ipsum
                lorem ipsum
              </p>
              <p>teste teste teste teste teste teste teste teste</p>
              <p>teste teste teste teste teste teste teste teste</p>
              <p>
                teste teste teste teste teste teste teste teste lorem ipsum
                lorem ipsum
              </p>
              <p>
                teste teste teste teste teste teste teste teste lorem ipsum
                lorem ipsum
              </p>
            </div>
          </div>
          <hr />
          <Form
            faceKeys={data.faceKeys}
            faceTitles={data.faceTitles}
            faceFeatures={data.faceFeatures}
            handleClick={resetGame}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default App;
