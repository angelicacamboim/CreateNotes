import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          console.log("ListadeNotas.jsx " + "recebe as notas.titulo e notas.texto e atribui ao componente cardNota" + nota.titulo + nota.texto)
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo= {nota.titulo} texto = {nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
