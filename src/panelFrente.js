import React from 'react';
import {
  View
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
      carregado: false,
      telaAnterior: null
    }
  }

  async componentDidMount() {
    await FunctionLanguage.prototype.trocarIdioma("en-us");
    global.PanelFrenteTelaAtual = "ScreenInicio";
    await this.setState({ carregado: true });


    // Codigo a baixo é responsavel por atualizar a tela e modificar a tela atual
    setInterval(async()=>{
      if (global.PanelFrenteTelaAtual == "ATUALIZAR") {
        global.PanelFrenteTelaAtual = this.state.telaAnterior;
        await this.setState({ carregado: false, telaAnterior: global.PanelDireitaTelaAtual });
        setTimeout(async () => { await this.setState({ carregado: true }); }, 500)
      } else
      if (global.PanelFrenteTelaAtual !== this.state.telaAnterior) {
        this.setState({ telaAnterior: global.PanelFrenteTelaAtual });
      }
    }, 0);

  }

  render() {
    if (this.state.carregado == true) {
      switch (global.PanelFrenteTelaAtual) {
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
          return (<View></View>);
      }

    } else {
      return (<ScreenCarregando></ScreenCarregando>);
    }
  }


};