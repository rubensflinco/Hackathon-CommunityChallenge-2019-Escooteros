import React from 'react';
import {
  AppRegistry,
  View
} from 'react-360';
import ReactDOM from 'react-dom'
import LayoutAlerta from '../layout/alerta';
import LayoutTexto from '../layout/texto';
import FunctionVideo from '../function/video';
import estilo from '../style/estiloGlobal';
import LayoutBarraPontos from '../layout/barraPontos';

export default class ScreenFimDoJogo extends React.Component {

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
  }

  clickRestart() {
    global.PanelFrenteTelaAtual = "ScreenInicio";
  }

  render() {
    return (
      <View>
        <LayoutBarraPontos />
        
        <LayoutAlerta titulo={global.linguaAtual.ScreenFimDoJogo.titulo} textoBotao={global.linguaAtual.ScreenFimDoJogo.botao} onClick={this.clickRestart} style={estilo.prototype.global().fimDoJogo}>
          <View>
            <LayoutTexto style={estilo.prototype.global().textoCentro}>{global.linguaAtual.ScreenFimDoJogo.descricao1}</LayoutTexto>
            <LayoutTexto style={estilo.prototype.global().textoCentro}>{global.linguaAtual.ScreenFimDoJogo.descricao2}</LayoutTexto>
          </View>
        </LayoutAlerta>
      </View>
    );
  }


};

AppRegistry.registerComponent('ScreenCarregando', () => ScreenFimDoJogo);
