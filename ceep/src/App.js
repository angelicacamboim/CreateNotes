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
    console.log("app.js " + "pega o titulo e o texto pelo props criarNota")
    const novaNota = {titulo, texto}
    const novoarrayNotas = [...this.state.notas, novaNota]
    console.log("app.js " + "cria um novo array para add no setStates" + novoarrayNotas)
    const novoEstado = {
      notas: novoarrayNotas
    }
    this.setState(novoEstado)
    console.log("app.js " + "seta um novo estado" + novoEstado)
  }

  render() {
    console.log("app.js " + "<ListaDeNotas notas={this.state.notas}/>" + this.state.notas)
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;