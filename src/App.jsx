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
  const generateRandomColor = () => {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  };

  const generateRandomColorConfirm = () => {
    generateRandomColor();
    setHistory((h) => [[red, green, blue], ...h]);
  };

  return (
    <>
      <div className="container">
        <h1> Gerador de Cores RGB</h1>
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

        <div className="button-organize">
          <button
            onClick={() => setHistory((h) => [...h, [red, green, blue]])}
            disabled={isColorInHistory}
          >
            Guardar cor{" "}
          </button>
          <button
            onClick={generateRandomColorConfirm}
            disabled={isColorInHistory}
          >
            Gerar cor aleatória e Guardar{" "}
          </button>
          <button onClick={generateRandomColor}>
            Gerar cor aleatória sem guardar
          </button>
        </div>
        <br />
        <br />
        <hr />
        <br />

        <History data={history} backgroundColor={handlebackgroundColor} />
      </div>
    </>
  );
};

export default App;
