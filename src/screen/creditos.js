import React from 'react';
import {
  AppRegistry,
  View
} from 'react-360';
import ReactDOM from 'react-dom'
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

  componentDestroy() {
    console.log("Componente destruido");
    var container = ReactDOM.findDOMNode(this).parentNode;
    ReactDOM.unmountComponentAtNode(container);
  }

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
      <LayoutAlerta titulo={global.linguaAtual.ScreenCreditos.titulo} textoBotao={global.linguaAtual.ScreenCreditos.botao} onClick={this.clickRestart}>
        <View style={estilo.prototype.global().espacoCreditos}></View>
        <View style={[estilo.prototype.global().scrollCreditos, { transform: [{ translate: [0, animateScroll, 0] }] }]}>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            {global.linguaAtual.ScreenCreditos.negocios}
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
           {global.linguaAtual.ScreenCreditos.desenvolvedores}
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Catarina Manzieri
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rubens Flinco
          </LayoutTexto>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            {global.linguaAtual.ScreenCreditos.gestao}
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rogério Rodrigues
          </LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().h6}>
            Rubens Flinco
          </LayoutTexto>

          <LayoutTexto style={[estilo.prototype.global().h6, estilo.prototype.global().bold]}>
            {global.linguaAtual.ScreenCreditos.gravacaoDeVideo}
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
            {global.linguaAtual.ScreenCreditos.agradecimento}
          </LayoutTexto>

        </View>
      </LayoutAlerta>
    );
  }


};

AppRegistry.registerComponent('ScreenCreditos', () => ScreenCreditos);
