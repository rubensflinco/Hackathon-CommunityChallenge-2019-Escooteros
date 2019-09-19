import React from 'react';
import {
  AppRegistry,
  View
} from 'react-360';
import LayoutAlerta from '../layout/alerta';
import FunctionVideo from '../function/video';
import LayoutTexto from '../layout/texto';
import estilo from '../style/estiloGlobal';

let animateScroll = -650;
let animateInterval;

export default class ScreenCreditos extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {
    FunctionVideo.prototype.stop();

    animateInterval = setInterval(() => {
      console.log(animateScroll);
      if (animateScroll < 250) {
        animateScroll = animateScroll + 1;
      } else {
        clearInterval(animateInterval);
      }
    }, 0);
  }

  clickRestart() {
    global.localStorage.setItem("telaAtual", "ScreenInicio");
  }

  render() {
    return (
      <LayoutAlerta titulo="Créditos Finais" textoBotao="Jogar novamente" onClick={this.clickRestart}>
        <View style={estilo.prototype.global().espacoCreditos}></View>
        <View style={[estilo.prototype.global().scrollCreditos, { transform: [{ translate: [0, animateScroll, 0] }] }]}>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            Business
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Daniel Freitas
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Marcelo Miranda
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rogério Rodrigues
          </LayoutTexto>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            Development
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Catarina Manzieri
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rubens Flinco
          </LayoutTexto>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            Management
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rogério Rodrigues
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rubens Flinco
          </LayoutTexto>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            Video Recording
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Daniel Freitas
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Marcelo Miranda
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rogério Rodrigues
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rubens Flinco
          </LayoutTexto>

          <LayoutTexto style={[estilo.prototype.global().h3, estilo.prototype.global().bold]}>
            Muito obrigado por jogar nosso game :)
          </LayoutTexto>

        </View>
      </LayoutAlerta>
    );
  }


};

AppRegistry.registerComponent('ScreenCreditos', () => ScreenCreditos);
