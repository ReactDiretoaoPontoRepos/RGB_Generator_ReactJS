import { useState } from "react";
import CardInput from "./components/CardInput";
import ColorBox from "./components/ColorBox";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="container">
      <CardInput>
        <h4> Red: {red} </h4>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={({ target }) => setRed(parseInt(target.value))}
        />
      </CardInput>

      <h4> Green: {green} </h4>
      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={({ target }) => setGreen(parseInt(target.value))}
      />

      <h4> Blue: {blue} </h4>
      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={({ target }) => setBlue(parseInt(target.value))}
      />

      <ColorBox bgColor={`rgb(${red},${green},${blue})`} />
      <p>
        {red},{blue},{green}
      </p>
    </div>
  );
};

export default App;
