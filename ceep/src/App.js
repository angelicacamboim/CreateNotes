import React, { Component } from 'react'
import ListaDeNotas from './components/ListadeNotas'
import FormularioCadastro from './components/FormularioCadastro'

export default class App extends Component  {
  render(){
  return (
    <div>
      <FormularioCadastro/>
      <ListaDeNotas/>
    </div>
   
  )};
}

