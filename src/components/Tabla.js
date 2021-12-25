import React from "react";
import Cuadro from "./Cuadro";

export default function Tabla({ dim, color, reset }) {
  //columns definition
  const grid1 = [];
  for (let col = 0; col < dim; col++) {
    grid1.push(
      <td>
        <Cuadro color={color} reset={reset} />
      </td>
    );
  }
  //rows definition
  const grid = [];
  for (let row = 0; row < dim; row++) {
    grid.push(<tr>{grid1}</tr>);
  }

  //render component
  return (
    <table>
      <tbody>{grid}</tbody>
    </table>
  );
}
