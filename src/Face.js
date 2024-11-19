import styles from "./face.module.css";
/*<a href="https://www.flaticon.com/free-icons/emot" title="emot icons">Emot icons created by Creative Squad - Flaticon</a>*/
/*<a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by Freepik - Flaticon</a>*/
import { Suspense, useLayoutEffect } from "react";

const Face = ({ id, face, type }) => {
  function handleMouseEnter(e) {
    console.log(
      "skinColor: " +
        face.skinColor +
        "\neye: " +
        face.eye +
        "\nnose: " +
        face.nose +
        "\nlip: " +
        face.lip
    );
  }

  return (
    <>
      <div className={styles.flipContainer} onMouseEnter={handleMouseEnter}>
        <div
          className={styles.flipper + " " + (!face.visible && styles.wrongFace)}
          style={{ "--delay": (Math.ceil(Math.random() * 9) + 1) * 0.1 + "s" }}
        >
          <div
            className={
              styles.cardUp +
              " " +
              (type === "player"
                ? styles.bgColorPlayer
                : styles.bgColorOpponent)
            }
          >
            <div
              className={styles.face}
              id={"face" + id}
              style={{
                "--skin-color":
                  face.skinColor === "preta"
                    ? "#6e392c"
                    : face.skinColor === "branca"
                    ? "#ffdbc1"
                    : face.skinColor === "parda"
                    ? "#ae7748"
                    : face.skinColor === "amarela"
                    ? "#f5da88"
                    : "#a15253",
              }}
            />
            <div
              className={styles.eyes + " " + face.eye}
              id={"eye" + id}
              style={{
                "--eye-color":
                  face.eye === "escuros" && Math.ceil(Math.random() * 2) === 1
                    ? "#753109"
                    : face.eye === "escuros" &&
                      Math.ceil(Math.random() * 2) === 2
                    ? "#000000"
                    : face.eye === "claros" &&
                      Math.ceil(Math.random() * 2) === 1
                    ? "#26a1de"
                    : "#26de91",
              }}
            />
            <p className={styles.name}>{face.name}</p>
          </div>
          <div
            className={
              styles.cardDown +
              " " +
              (type === "player"
                ? styles.bgColorPlayer
                : styles.bgColorOpponent)
            }
          >
            <div className={styles.cardBackIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Face;
