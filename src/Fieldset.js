export function Fieldset({ title, _key, values, onClick }) {
  _key = _key.charAt(0).toUpperCase() + _key.slice(1);
  return (
    <fieldset>
      <legend>{title}</legend>
      {values.map((value, i) => {
        return (
          <div key={_key + value} style={{ display: "inline-block" }}>
            <input
              type="radio"
              id={"chosen" + _key + i}
              name={_key}
              value={value}
            />
            <label htmlFor={"chosen" + _key + i}>{value}</label>
          </div>
        );
      })}
      <button type="button" onClick={onClick} id={"btnInput-" + _key}>
        cancelar
      </button>
    </fieldset>
  );
}
