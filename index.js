import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import 'localstorage-polyfill';
import ScreenInicio from './src/screen/inicio';
import ScreenCarregando from './src/screen/carregando';
import ScreenJogando from './src/screen/jogando';

// VideoModule.createPlayer('myPlayer');
// VideoModule.play('myPlayer', { source: { url: staticAssetURL('video.mp4') }, stereo: '2D' });


export default class Hackathon_CommunityChallenge_2019 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carregado: false,
      jogando: "false"
    }
  }

  componentWillMount(){
    global.localStorage.setItem("jogando", false);
  }

  componentDidMount() {
    // Environment.setBackgroundVideo('myPlayer');

    // Responsavel por loop de verificação para mudar tela de inicio para jogando
    setInterval(()=>{
      this.setState({
        jogando: global.localStorage.getItem("jogando")
      });
    },1000)

    this.setState({
      carregado: true
    });
  }

  render() {
    if (this.state.carregado == true) {
      if (this.state.jogando == "false") {
        return (
          <ScreenInicio></ScreenInicio>
        );
      } else {
        return (
          <ScreenJogando></ScreenJogando>
        );
      }

    } else {
      return (
        <ScreenCarregando></ScreenCarregando>
      );
    }
  }


};

AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
