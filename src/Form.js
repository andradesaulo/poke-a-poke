const Form = ({
  faceKeys,
  faceTitles,
  faceFeatures,
  handleSubmit,
  handleClick,
}) => (
  <form className="guessInterface" onSubmit={handleSubmit}>
    <div className="guessingFeatureFace"></div>
    {faceFeatures.map((e, i) => {
      return (
        <select id={"featureSelect" + i + 1} name={faceKeys[i]}>
          <option value="">{faceTitles[i]}</option>
          {e.map((f) => {
            return (
              <option value={f}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </option>
            );
          })}
        </select>
      );
    })}
    <button type="submit">Chutar</button>
    <button>Arriscar</button>
    <button type="button" onClick={handleClick}>
      Resetar
    </button>
  </form>
);

export default Form;
