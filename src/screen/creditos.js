import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import LayoutAlerta from '../layout/alerta';
import Video from '../function/video';
import LayoutBr from '../layout/br';

export default class ScreenCreditos extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  // inside class component
  componentDidMount() {
    Video.prototype.stop();
  }

  clickRestart() {
    global.localStorage.setItem("telaAtual", "ScreenInicio");
  }
  
  render() {
    return (
      <LayoutAlerta titulo="Créditos Finais" textoBotao="Recomeçar" onClick={this.clickRestart}>
        Business
        <LayoutBr/><LayoutBr/>
        Daniel Freitas
        Marcelo Miranda
        Rogério Rodrigues
        <LayoutBr/><LayoutBr/>
        Development
        <LayoutBr/>
        Rubens Flinco
        Catarina Manzieri
        <LayoutBr/><LayoutBr/>
        Management
        <LayoutBr/>
        Rogério Rodrigues
        Rubens Flinco
        <LayoutBr/><LayoutBr/>
        Video Recording
        <LayoutBr/>
        Daniel Freitas
        Marcelo Miranda
        Rubens Flinco
      </LayoutAlerta>
      );
    }
    
    
  };
  
  AppRegistry.registerComponent('ScreenCreditos', () => ScreenCreditos);
  