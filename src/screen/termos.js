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
import LayoutBotao from '../layout/botao';

let animateScroll = -100;

export default class ScreenTermos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      atualizarTela: false
    }
  }

  componentDestroy() {
    console.log("Componente destruido");
    var container = ReactDOM.findDOMNode(this).parentNode;
    ReactDOM.unmountComponentAtNode(container);
  }

  componentDidMount() {

  }

  clickSubir(shelf){
    animateScroll = animateScroll + 50;
    shelf.setState({ atualizarTela: true });
  }

  clickDescer(shelf){
    animateScroll = animateScroll - 50;
    shelf.setState({ atualizarTela: true });
  }

  render() {
    return (
      <LayoutAlerta titulo={global.linguaAtual.ScreenTermos.titulo}>
        <View style={[estilo.prototype.global().scrollCreditos, { width: 900, transform: [{ translate: [0, animateScroll, 0] }] }]}>

          <LayoutTexto style={estilo.prototype.global().h6}>
            {global.linguaAtual.ScreenTermos.descricao}
          </LayoutTexto>

        </View>
        <View style={[estilo.prototype.global().espacoCreditos, estilo.prototype.global().ladoALado]}>
          <LayoutBotao 
          onClick={()=>{this.clickSubir(this)}} 
          style={estilo.prototype.global().botaoTermos} 
          styleText={estilo.prototype.global().botaoTermosTXT}>
             ^^ 
          </LayoutBotao>
          <LayoutBotao 
          onClick={()=>{this.clickDescer(this)}} 
          style={estilo.prototype.global().botaoTermos} 
          styleText={estilo.prototype.global().botaoTermosTXT}> 
            vv 
          </LayoutBotao>
        </View>
      </LayoutAlerta>
    );
  }


};

AppRegistry.registerComponent('ScreenTermos', () => ScreenTermos);
