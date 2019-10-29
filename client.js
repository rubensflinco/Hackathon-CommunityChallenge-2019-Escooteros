// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Surface,
  Module,
} from 'react-360-web';

function init(bundle, parent, options = {}) {

  let r360 = new ReactInstance(bundle, parent, {
    // Adicione opções personalizadas aqui
    fullScreen: true,
    nativeModules: [
      ctx => new fbAuth(ctx),
      ctx => new SessionStorage(ctx),
    ],
    ...options,
  });


  r360.renderToSurface(
    r360.createRoot('Hackathon_CommunityChallenge_2019', { /* initial props */ }),
    r360.getDefaultSurface()
  );


  let PanelFrente = new Surface(1000, 700, Surface.SurfaceShape.Flat)
  PanelFrente.setAngle(
    0, /* yaw angle */
    0, /* pitch angle */
    0  /* roll angle */
  );
  r360.renderToSurface(
    r360.createRoot('PanelFrente', { /* initial props */ }),
    PanelFrente
  );


  let PanelTras = new Surface(1000, 700, Surface.SurfaceShape.Flat)
  PanelTras.setAngle(
    (-Math.PI / 2)*2, /* yaw angle */
    0, /* pitch angle */
    0  /* roll angle */
  );
  r360.renderToSurface(
    r360.createRoot('PanelTras', { /* initial props */ }),
    PanelTras
  );


  let PanelEsquerda = new Surface(1000, 700, Surface.SurfaceShape.Flat)
  PanelEsquerda.setAngle(
    (-Math.PI / 2)*1, /* yaw angle */
    0, /* pitch angle */
    0  /* roll angle */
  );
  r360.renderToSurface(
    r360.createRoot('PanelEsquerda', { /* initial props */ }),
    PanelEsquerda
  );


  let PanelDireita = new Surface(1000, 700, Surface.SurfaceShape.Flat)
  PanelDireita.setAngle(
    (-Math.PI / 2)*3, /* yaw angle */
    0, /* pitch angle */
    0  /* roll angle */
  );
  r360.renderToSurface(
    r360.createRoot('PanelDireita', { /* initial props */ }),
    PanelDireita
  );

  // Carregue o ambiente inicial
  r360.compositor.setBackground(r360.getAssetURL('backgroundLoading.jpg'));
}



// Modulo de autenticação com o Facebook SDK
class fbAuth extends Module {

  constructor(ctx) {
    super('fbAuth');
    this._ctx = ctx;
  }

  iniciar(idCallBack) {
    window.fbAsyncInit = () => {
      // Configurações iniciais do Facebook SDK
      FB.init({
        appId: '495647514322199',
        cookie: true,
        xfbml: true,
        version: 'v4.0'
      });
      FB.AppEvents.logPageView();

      FB.getLoginStatus((respostaLoginStatus) => {
        if (respostaLoginStatus.status == 'connected') {
          // Login feito, pegar informações na API e tratar
          let userFbID = respostaLoginStatus.authResponse.userID;
          FB.api(userFbID, (respostaAPI) => { this.tratarRespostaAPI(idCallBack, respostaAPI) });
        } else {
          // A pessoa não está conectada à sua página da Web ou não podemos saber. 
          this._ctx.invokeCallback(idCallBack, [false]);
        }
      });

    };

    // Import do Facebook SDK
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/pt_BR/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  autenticar(idCallBack) {
    FB.login((respostaLogin) => {
      if (respostaLogin.status === 'connected') {
        // Login feito, pegar informações na API e tratar
        let userFbID = respostaLogin.authResponse.userID;
        FB.api(userFbID, (respostaAPI) => { this.tratarRespostaAPI(idCallBack, respostaAPI) });
      } else {
        // A pessoa não está conectada à sua página da Web ou não podemos saber. 
        this._ctx.invokeCallback(idCallBack, [false, respostaLogin]);
      }
    });
  }

  tratarRespostaAPI(idCallBack, respostaAPI) {
    if (respostaAPI && !respostaAPI.error) {
      let userFbID = respostaAPI.id;
      respostaAPI.nome = respostaAPI.name;
      respostaAPI.userFbID = userFbID;
      respostaAPI.apelido = respostaAPI.name.toLowerCase().replace(/\s+/, "");
      respostaAPI.foto = "http://graph.facebook.com/" + userFbID + "/picture?type=large&width=720&height=720";

      this._ctx.invokeCallback(idCallBack, [true, respostaAPI]);
    } else {
      // Respota da API veio com erro
      this._ctx.invokeCallback(idCallBack, [false, respostaAPI]);
    }
  }

}



// Modulo de autenticação com o Facebook SDK
class SessionStorage extends Module {

  constructor(ctx) {
    super('SessionStorage');
    this._ctx = ctx;
  }


  set(name, value) {
    sessionStorage.setItem(name, value);
  }

  get(name, idCallBack) {
    let response = sessionStorage.getItem(name);
    this._ctx.invokeCallback(idCallBack, [response]);
  }

  delete(name) {
    sessionStorage.removeItem(name);
  }

  clear(){
    sessionStorage.clear();
  }

}


window.React360 = { init };
