import "./App.css";
import { useState } from "react";
import Tabla from "./components/Tabla";
function App() {
  //dimensión por defecto == 3
  const [Gdim, setGdim] = useState(3);
  const [color, setColor] = useState("blueviolet");
  const [reset, setReset] = useState(false);

  const blanco = () => {
    setColor("white");
  };
  const naranja = () => {
    setColor("orange");
  };
  const amarillo = () => {
    setColor("yellow");
  };
  const limpiar = () => {
    setReset(!reset);
  };
  const morado = () => {
    setColor("blueviolet");
  };
  return (
    <div id="app">
      <div className="container">
        <div className="item item1">El juego de la memoria</div>

        <div className="item">
          <button
            className="boton"
            onClick={() => {
              if (Gdim > 1) {
                setGdim(Gdim - 1);
              }
            }}
          >
            Disminuir
          </button>
        </div>
        <div className="item item1">{Gdim}</div>
        <div className="item">
          <button
            className="boton"
            onClick={() => {
              if (Gdim < 16) {
                setGdim(Gdim + 1);
              }
            }}
          >
            Aumentar
          </button>
        </div>
      </div>
      <div className="container1">
        <Tabla dim={Gdim} color={color} reset={reset} />
      </div>
      <div className="f">
        <button className="botonYellow" onClick={amarillo}>
          Color amarillo
        </button>
        <button className="botonWhite" onClick={blanco}>
          Color blanco
        </button>
        <button className="botonOrange" onClick={naranja}>
          Color naranja
        </button>
        <button className="botonMorado" onClick={morado}>
          Limpiar cuadro
        </button>
        <button className="botonlimpiar" onClick={limpiar}>
          Limpiar tablero
        </button>
      </div>
      1
    </div>
  );
}

export default App;
