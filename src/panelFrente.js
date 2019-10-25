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

export default class PanelFrente extends React.Component {

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
    if (this.state.carregado == true) {
      console.log("[Tela atual] "+this.state.telaAtual);

      switch (global.telaAtual) {
        case "ScreenInicio":
          return (<ScreenInicio></ScreenInicio>);
        case "ScreenJogando":
          return (<ScreenJogando></ScreenJogando>);
        case "ScreenCarregando":
          return (<ScreenCarregando></ScreenCarregando>);
        case "ScreenFimDoJogo":
          return (<ScreenFimDoJogo></ScreenFimDoJogo>);
        case "ScreenCreditos":
          return (<ScreenCreditos></ScreenCreditos>);

        default:
          return (<ScreenInicio></ScreenInicio>);
      }

    } else {
      return (<ScreenCarregando></ScreenCarregando>);
    }
  }


};

const ConnectedPanelFrente = connect(PanelFrente);
AppRegistry.registerComponent('PanelFrente', () => ConnectedPanelFrente);