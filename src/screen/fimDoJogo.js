import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import LayoutAlerta from '../layout/alerta';
import Video from '../function/video';

export default class ScreenFimDoJogo extends React.Component {
  
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
      <LayoutAlerta titulo="S E   L A S C O U !" textoBotao="Recomeçar" onClick={this.clickRestart}>
        Achou que ia continuar jogando? Achou errado, otário!
      </LayoutAlerta>
      );
    }
    
    
  };
  
  AppRegistry.registerComponent('ScreenCarregando', () => ScreenFimDoJogo);
  