import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Estudos", "Programação").map((categoria, index) => {
          return (
            <li key={index}>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
