import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import LayoutBotoesEscolha from '../layout/botoesEscolha';
import Video from '../function/video';
import ScreenFimDoJogo from './fimDoJogo';

var video = Video.prototype.create();

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {

  }

  click() {
    console.log('test');
    Video.prototype.play("videos/pegouPatinete.mp4", "2D");
    console.log(video);
  }

  render() {
    return (
      // <LayoutBotoesEscolha
      //   texto1="test"
      //   onClick1={this.click}
      //   texto2="test 2 dwad wad"
      //   onClick2={this.click}
      // ></LayoutBotoesEscolha>

      <ScreenFimDoJogo>
        
      </ScreenFimDoJogo>

    );
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
