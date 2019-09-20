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
    global.localStorage.setItem("telaAtual", "ScreenInicio");
  }
  
  render() {
    return (
      <LayoutAlerta titulo="S E   L A S C O U !" textoBotao="Recomeçar" onClick={this.clickRestart}>
        <View>
          <LayoutTexto>Achou mesmo que ia continuar jogando?</LayoutTexto>
          <LayoutTexto style={estilo.prototype.global().textoCentro}>Achou errado, otário!</LayoutTexto>
        </View>
      </LayoutAlerta>
      );
    }
    
    
  };
  
  AppRegistry.registerComponent('ScreenCarregando', () => ScreenFimDoJogo);
  