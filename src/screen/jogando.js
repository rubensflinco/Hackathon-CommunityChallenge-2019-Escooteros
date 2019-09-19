import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import LayoutBotoesEscolha from '../layout/botoesEscolha';
import Video from '../function/video';

const video = Video.prototype.create();

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {
    Video.prototype.play("videos/indoAteOPatinete.mp4", "2D");
    Video.prototype.get(video);
  }

  click() {
    console.log('test');
    // global.localStorage.setItem("telaAtual", "ScreenFimDoJogo");
    Video.prototype.play("videos/estacinouCerto.mp4", "2D");
    Video.prototype.get(video);
  }

  render() {
    return (
      <LayoutBotoesEscolha
        texto1="test"
        onClick1={this.click}
        texto2="test 2 dwad wad"
        onClick2={this.click}
      ></LayoutBotoesEscolha>
    );
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
