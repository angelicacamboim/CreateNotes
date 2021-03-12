import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor() {
    super();
    this.title = "";
    this.text = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.title = evento.target.value;

  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.text = evento.target.value;

  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.title, this.text)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
