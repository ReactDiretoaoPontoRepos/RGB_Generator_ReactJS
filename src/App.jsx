import { useState } from "react";
import CardInput from "./components/CardInput";
import ColorBox from "./components/ColorBox";
import History from "./components/History";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [history, setHistory] = useState([]);

  const handlebackgroundColor = (r, g, b) => `rgb(${r},${g},${b})`;

  const isColorInHistory = history.some(
    (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue])
  );

  return (
    <div className="container">
      <div className="card-container">
        <CardInput color="Red" colorState={red} setState={setRed} />
        <CardInput color="Green" colorState={green} setState={setGreen} />
        <CardInput color="Blue" colorState={blue} setState={setBlue} />
      </div>
      <ColorBox
        bgColor={handlebackgroundColor(red, green, blue)}
        redColor={red}
        blueColor={blue}
        greenColor={green}
      />
      <button
        onClick={() => setHistory((h) => [...h, [red, green, blue]])}
        disabled={isColorInHistory}
        // disabled={}
      >
        Guardar cor{" "}
      </button>
      <br />
      <br />
      <hr />
      <br />

      <History data={history} backgroundColor={handlebackgroundColor} />
    </div>
  );
};

export default App;
