import React, { useState, useEffect } from "react";
import "./cuadro.css";

//cuadro definition
export default function Cuadro({ color, reset }) {
  const [colores, setColores] = useState("blueviolet");
  const cambia = () => {
    setColores(color);
  };
  //para actualizar cuando se haga reset
  useEffect(() => {
    setColores("blueviolet");
  }, [reset]);

  return (
    <div style={{ backgroundColor: colores }} id="caja" onClick={cambia}></div>
  );
}
