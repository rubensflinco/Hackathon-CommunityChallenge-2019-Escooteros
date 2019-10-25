import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import ScreenInicio from './screen/inicio';
import ScreenCarregando from './screen/carregando';
import ScreenJogando from './screen/jogando';
import ScreenFimDoJogo from './screen/fimDoJogo';
import ScreenCreditos from './screen/creditos';
import FunctionLanguage from './function/language';

export default class PanelEsquerda extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carregado: false
    }
  }

  async componentDidMount() {
    await FunctionLanguage.prototype.trocarIdioma("en-us");
    global.telaAtual = "ScreenInicio";
    await this.setState({ carregado: true });


    setInterval(()=>{
      if (global.telaAtual !== this.state.telaAtual) {
        this.setState({ telaAtual: global.telaAtual });
      }
    }, 0);

  }

  render() {

          return (<ScreenCreditos></ScreenCreditos>);
  }


};

const ConnectedPanelEsquerda = connect(PanelEsquerda);
AppRegistry.registerComponent('PanelFrente', () => ConnectedPanelEsquerda);