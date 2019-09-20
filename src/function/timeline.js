import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import ReactDOM from 'react-dom'
import LayoutBotoesEscolha from '../layout/botoesEscolha';
import FunctionVideo from './video';

const video = FunctionVideo.prototype.create();

export default class FunctionTimeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoAtual: "indoAteOPatinete",
      videoRodando: "",
      videoFinalizou: false,
    }
  }

  componentDestroy() {
    console.log("Componente destruido");
    var container = ReactDOM.findDOMNode(this).parentNode;
    ReactDOM.unmountComponentAtNode(container);
  }

  playVideoAtual(videoAtual, element) {
    if (this.state.videoAtual !== this.state.videoRodando) {
      let This = this;
      this.setState({ videoFinalizou: false, videoRodando: videoAtual });
      FunctionVideo.prototype.play("videos/" + videoAtual + ".mp4", "2D");

      element.addListener('onVideoStatusChanged', (event) => {
        if (event.status == "finished") {
          This.setState({ videoFinalizou: true })
          console.log("O video terminou");
        }
      });
    }
  }

  componentDidUpdate() {
    this.playVideoAtual(this.state.videoAtual, video);
  }

  render() {

    // cada case é um nome de video que retorna algo na tela depois de finalizado
    switch (this.state.videoAtual) {
      case "indoAteOPatinete":
        if (this.state.videoFinalizou === true) {
          return (<LayoutBotoesEscolha
            texto1="Desbloquear"
            onClick1={() => { this.setState({ videoAtual: "celularRoubado", videoFinalizou: false }) }}
            texto2="Olhar para os lados e desbloquear"
            onClick2={() => { this.setState({ videoAtual: "patineteDesbloqueado", videoFinalizou: false }) }} />)
        }



      case "celularRoubado":
        if (this.state.videoFinalizou === true) {
          global.localStorage.setItem("telaAtual", "ScreenFimDoJogo");
        }



      case "patineteDesbloqueado":
        if (this.state.videoFinalizou === true) {
          return (<LayoutBotoesEscolha
            texto1="Dar três remadas e acelerar"
            onClick1={() => { this.setState({ videoAtual: "tresRemadasAcertou", videoFinalizou: false }) }}
            texto2="Dar uma remada e acelerar"
            onClick2={() => { this.setState({ videoAtual: "umaRemadaErrou", videoFinalizou: false }) }} />)
        }



      case "umaRemadaErrou":
        if (this.state.videoFinalizou === true) {
          global.localStorage.setItem("telaAtual", "ScreenFimDoJogo");
        }



      case "tresRemadasAcertou":
        if (this.state.videoFinalizou === true) {
          return (<LayoutBotoesEscolha
            texto1="Parar para o pedestre passar"
            onClick1={() => { this.setState({ videoAtual: "parouParaPedestrePassarContinuaParaIrEstacionar", videoFinalizou: false }) }}
            texto2="Atropelar o pedestre"
            onClick2={() => { this.setState({ videoAtual: "atropelouPedestre", videoFinalizou: false }) }} />)
        }



      case "atropelouPedestre":
        if (this.state.videoFinalizou === true) {
          global.localStorage.setItem("telaAtual", "ScreenFimDoJogo");
        }



      case "parouParaPedestrePassarContinuaParaIrEstacionar":
        if (this.state.videoFinalizou === true) {
          return (<LayoutBotoesEscolha
            texto1="Estacionar em cima da arvore"
            onClick1={() => { this.setState({ videoAtual: "estacionouErrado", videoFinalizou: false }) }}
            texto2="Estacionar patinete ao lado da arvore"
            onClick2={() => { this.setState({ videoAtual: "estacionouCerto", videoFinalizou: false }) }} />)
        }



      case "estacionouErrado":
        if (this.state.videoFinalizou === true) {
          global.localStorage.setItem("telaAtual", "ScreenFimDoJogo");
        }



      case "estacionouCerto":
          if (this.state.videoFinalizou === true) {
            global.localStorage.setItem("telaAtual", "ScreenCreditos");
          }



      default:
        return (<View />);
    }
  }

};

AppRegistry.registerComponent('FunctionTimeline', () => FunctionTimeline);
