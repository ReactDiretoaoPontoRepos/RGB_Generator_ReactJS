import "./styles.css";

const ColorBox = ({ bgColor }) => {
  return <div className="preview" style={{ backgroundColor: bgColor }}></div>;
};

export default ColorBox;
