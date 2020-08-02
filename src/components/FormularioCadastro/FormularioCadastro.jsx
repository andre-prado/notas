import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título da Nota"></input>
        <textarea placeholder="conteúdo da nota" />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
