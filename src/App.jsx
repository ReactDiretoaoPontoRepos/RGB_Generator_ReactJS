import { useState } from "react";
import CardInput from "./components/CardInput";
import ColorBox from "./components/ColorBox";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="container">
      <div className="card-container">
        <CardInput color="Red" colorState={red} setState={setRed} />
        <CardInput color="Green" colorState={green} setState={setGreen} />
        <CardInput color="Blue" colorState={blue} setState={setBlue} />
      </div>

      <ColorBox
        bgColor={`rgb(${red},${green},${blue})`}
        redColor={red}
        blueColor={blue}
        greenColor={green}
      />
    </div>
  );
};

export default App;
