import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import LayoutAlerta from '../layout/alerta';
import ScreenInicio from './inicio';

export default class ScreenFimDoJogo extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  // inside class component
  componentDidMount() {
    
  }

  clickRestart() {
    global.localStorage.setItem("fimDoJogo", true);
  }
  
  render() {
    return (
      <LayoutAlerta titulo="se fodeu" textoBotao="Recomeçar" onClick={this.clickRestart}>
        Achou que ia continuar jogando? Achou errado, otário!
      </LayoutAlerta>      
      );
    }
    
    
  };
  
  AppRegistry.registerComponent('ScreenCarregando', () => ScreenFimDoJogo);
  