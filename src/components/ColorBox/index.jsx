import "./styles.css";

const ColorBox = ({ bgColor, redColor, greenColor, blueColor }) => {
  return (
    <div className="colorbox">
      <div className="preview" style={{ backgroundColor: bgColor }} />
      <p>
        {redColor}.{greenColor}.{blueColor}
      </p>
    </div>
  );
};

export default ColorBox;
