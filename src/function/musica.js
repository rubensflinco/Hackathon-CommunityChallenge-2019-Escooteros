import React from 'react';
import {
  NativeModules,
  AppRegistry,
  Environment,
  staticAssetURL,
} from 'react-360';
const { AudioModule } = NativeModules;

export default class FunctionMusica extends React.Component {

  constructor(props) {
    super(props);
  }

  efeitoSonoroRapido(url, name = 'efeitoSonoro', muted = false, volume = 0.3, autoPlay = false) {
    if (global.ConfigSomMuted == false) {
      this.destroy(name);
      this.create(url, name, muted, volume, autoPlay);
      this.play(name);
    } else {
      this.destroy(name);
    }
  }

  create(url, name = 'musica', muted = false, volume = 0.3, autoPlay = false) {
    AudioModule.createAudio(name, {
      source: staticAssetURL(url),
      volume,
      muted,
      autoPlay
    });
  }

  play(name = 'musica') {
    AudioModule.play(name);
  }

  stop(name = "musica") {
    AudioModule.stop(name)
  }

  pause(name = "musica") {
    AudioModule.pause(name)
  }

  destroy(name = "musica") {
    this.stop(name);
    this.stop('musica');
    this.stop('efeitoSonoro');
    this.stop(global.musicaAnterior);
    AudioModule.destroy(name);
    AudioModule.destroy('musica');
    AudioModule.destroy('efeitoSonoro');
    AudioModule.destroy(global.musicaAnterior);
  }

  mute(name = "musica") {
    AudioModule.setParams(name, {
      muted: true
    });
  }

  async radioGo(indexGo, caminhosExistentes) {
    if (global.ConfigMusicaMuted == false) {
      if (global.CreateMusica == true) {
        console.log(indexGo + "global.CreateMusica - Musica: " + caminhosExistentes[indexGo]);
        global.CreateMusica = false;
        await this.create(caminhosExistentes[indexGo], indexGo);
        await this.play(indexGo);
        global.musicaAnterior = indexGo;
      } else {
        console.log(indexGo + "Musica: " + caminhosExistentes[indexGo]);
        await this.destroy(global.musicaAnterior);
        await this.create(caminhosExistentes[indexGo], indexGo);
        await this.play(indexGo);
        global.musicaAnterior = indexGo;
      }
    } else {
      this.destroy(global.musicaAnterior);
    }
  };

  async radio(caminho = 'audios/', numeroMusicas = 10, extensao = '.mp3', interval = 192000) {
    if (global.ConfigMusicaMuted == false) {

      // Loop responsavel para verificar e pegar apenas os arquivos de musicas que estão na pasta
      let caminhosExistentes = [];
      for (let index = 1; index < numeroMusicas + 1; index++) {
        let filename = index + extensao;
        await fetch(staticAssetURL(caminho + filename)).then(response => {
          if (response.status == 200) {
            caminhosExistentes.push(caminho + filename);
          }
        })
          .catch(err => { });
      }

      // Responsavel por criar e dar play nas musicas da radio
      let shelf = this;
      for (let index = 0; index < caminhosExistentes.length; index++) {
        if ((index == 0) && (global.CreateMusica == true)) {
          this.radioGo(index, caminhosExistentes);
        } else {
          setTimeout(() => { shelf.radioGo(index, caminhosExistentes); }, interval);
        }
      }

    } else {
      this.destroy(global.musicaAnterior);
    }
  }


};

AppRegistry.registerComponent('FunctionMusica', () => FunctionMusica);
