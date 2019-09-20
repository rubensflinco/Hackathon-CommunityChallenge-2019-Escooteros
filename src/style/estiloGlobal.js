import React from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-360';

export default class estilo extends React.Component {

  constructor(props) {
    super(props);
  }

  global() {
    return StyleSheet.create({

      // Estilos para personalizar componentes
      fundoTransparente: {
        backgroundColor: 'transparent'
      },
      ladoALado: {
        flexDirection: 'row',
      },
      botaoTexto: {
        textAlign: 'center',
        color:'#222'
      },
      h1: {
        fontSize: 96
      },
      h2: {
        fontSize: 72
      },
      h3: {
        fontSize: 55.5
      },
      h4: {
        fontSize: 48
      },
      h5: {
        fontSize: 36
      },
      h6: {
        fontSize: 26
      },
      bold:{
        fontWeight: '700',
      },
      textoCentro: {
        textAlign: 'center',
      },
      textoRight: {
        textAlign: 'right',
      },


      // Estilos padroes de componentes
      texto: {
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#fff',
        opacity: 1,
      },
      botao: {
        width: 300,
        height: 'auto',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'rgba(250, 250, 250, 0.9)',
        borderRadius: 20,
        margin: '5px',
        justifyContent: 'center',
        alignItems: 'center',
      },
      quadro: {
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      quadroBototes: {
        top: 400,
        width: 1000,
        height: 230,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewFullScreen: {
        width: 1000,
        height: 600,
        backgroundColor: 'transparent',
      },
      quadroAlerta:{
        justifyContent: 'space-around',
        flexDirection: 'column',
      },
      viewAlerta:{
        justifyContent: 'flex-start'
      },
      tituloAlerta:{
        marginBottom: '6px' 
      },
      botaoAlerta:{
        justifyContent: 'flex-end',
      },
      quadroInicio:{
				transform: [{translate: [0, 90, 0]}],
      },
      espacoCreditos:{
        height: 300,
      },
      scrollCreditos: {
        top: 80,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
      },
      viewIdioma: {
        position: 'absolute',
				transform: [{translate: [300, -300, 0]}],
      },
      idiomaADireita: {
				transform: [{translate: [50, 0, 0]}],
      },
      botaoIdioma: {
        paddingLeft: 10,
        paddingRight: 10,
      },
      logotipo: {
        width: 222,
        height: 104,
        position: 'absolute',
				transform: [{translate: [15, -220, 0]}],
      }

    });
  }

};

AppRegistry.registerComponent('estilo', () => estilo);
