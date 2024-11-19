const Score = ({ opponentScore, playerScore }) => (
  <p className="score">
    <span className="opponentPoints">{opponentScore} </span>
    <span className="versus">X</span>
    <span className="playerPoints"> {playerScore}</span>
  </p>
);

export default Score;
