import React from 'react';
import {
  View
} from 'react-360';
import ScreenCarregando from './screen/carregando';
import FunctionLanguage from './function/language';
import ScreenRank from './screen/rank';


export default class PanelDireita extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carregado: false,
      telaAnterior: null
    }
  }

  async componentDidMount() {
    await FunctionLanguage.prototype.trocarIdioma("en-us");
    global.PanelDireitaTelaAtual = "ScreenRank";
    await this.setState({ carregado: true });


    // Codigo a baixo é responsavel por atualizar a tela e modificar a tela atual
    setInterval(async () => {
      if (global.PanelDireitaTelaAtual == "ATUALIZAR") {
        global.PanelDireitaTelaAtual = this.state.telaAnterior;
        await this.setState({ carregado: false, telaAnterior: global.PanelDireitaTelaAtual });
        setTimeout(async () => { await this.setState({ carregado: true }); }, 500)
      } else
      if (global.PanelDireitaTelaAtual !== this.state.telaAnterior) {
        this.setState({ telaAnterior: global.PanelDireitaTelaAtual });
      }
    }, 0);

  }

  render() {
    if (this.state.carregado == true) {
      switch (global.PanelDireitaTelaAtual) {
        case "ScreenRank":
          return (<ScreenRank></ScreenRank>);
        case "ScreenPerfil":
          return (<ScreenPerfil></ScreenPerfil>);

        default:
          return (<View></View>);
      }

    } else {
      return (<ScreenCarregando></ScreenCarregando>);
    }
  }

};