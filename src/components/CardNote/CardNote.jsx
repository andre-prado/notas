import React, { Component } from "react";
import './style.css'


class CardNote extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="title-header">
          <h3 className="title">Título da nota</h3>
        </header>
        <p className="text">
          Conteúdo da nota
        </p>
      </section>
    );
  }
}

export default CardNote;
