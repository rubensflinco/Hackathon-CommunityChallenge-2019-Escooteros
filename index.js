import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import 'localstorage-polyfill';
import ScreenInicio from './src/screen/inicio';
import ScreenCarregando from './src/screen/carregando';
import ScreenJogando from './src/screen/jogando';
import ScreenFimDoJogo from './src/screen/fimDoJogo';

export default class Hackathon_CommunityChallenge_2019 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carregado: false,
      telaAtual: "ScreenInicio"
    }
  }

  componentDidMount() {
    this.setState({
      carregado: true
    });


    // Responsavel por loop de verificação para mudar a tela atual
    setInterval(() => {
      this.setState({
        telaAtual: global.localStorage.getItem("telaAtual")
      });
    }, 500);
  }

  render() {
    if (this.state.carregado == true) {

      switch (this.state.telaAtual) {
        case "ScreenInicio":
          return (<ScreenInicio></ScreenInicio>);
        case "ScreenJogando":
          return (<ScreenJogando></ScreenJogando>);
        case "ScreenCarregando":
          return (<ScreenCarregando></ScreenCarregando>);
        case "ScreenFimDoJogo":
          return (<ScreenFimDoJogo></ScreenFimDoJogo>);

        default:
          return (<ScreenInicio></ScreenInicio>);
      }

    } else {
      return (<ScreenCarregando></ScreenCarregando>);
    }
  }


};

AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
