import "./styles.css";

const CardInput = ({ color, colorState, children, setState, classColor }) => {
  return (
    <div className="card-input">
      <h5>{color}</h5>
      <input
        className={classColor}
        type="range"
        min="0"
        max="255"
        value={colorState}
        onChange={({ target }) => setState(parseInt(target.value))}
      />

      <p>{colorState}</p>
      {children}
    </div>
  );
};

export default CardInput;
