import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoarrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoarrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(indice) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(indice,1)
    this.setState({notas: arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas apagarNotadaLista={this.deletarNota.bind(this)} notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;