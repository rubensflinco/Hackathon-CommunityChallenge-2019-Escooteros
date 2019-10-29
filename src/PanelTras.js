import React from 'react';
import {
  View
} from 'react-360';
import FunctionLanguage from './function/language';
import ScreenCarregando from './screen/carregando';
import ScreenTermos from './screen/termos';

export default class PanelTras extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carregado: false,
      telaAnterior: null
    }
  }

  async componentDidMount() {
    await FunctionLanguage.prototype.trocarIdioma("en-us");
    global.PanelTrasTelaAtual = "ScreenTermos";
    await this.setState({ carregado: true });

    
    // Codigo a baixo é responsavel por atualizar a tela e modificar a tela atual
    setInterval(async () => {
      if (global.PanelTrasTelaAtual == "ATUALIZAR") {
        global.PanelTrasTelaAtual = this.state.telaAnterior;
        await this.setState({ carregado: false, telaAnterior: global.PanelTrasTelaAtual });
        setTimeout(async () => { await this.setState({ carregado: true }); }, 500)
      } else
      if (global.PanelTrasTelaAtual !== this.state.telaAnterior) {
        this.setState({ telaAnterior: global.PanelTrasTelaAtual });
      }
    }, 0);

  }

  render() {
    if (this.state.carregado == true) {
      switch (global.PanelTrasTelaAtual) {
        case "ScreenTermos":
          return (<ScreenTermos />);
        default:
          return (<View></View>);
      }

    } else {
      return (<ScreenCarregando></ScreenCarregando>);
    }
  }

};