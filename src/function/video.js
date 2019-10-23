import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
} from 'react-360';
import VideoModule from 'VideoModule';
import moment from 'moment';

export default class FunctionVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  create(name = "video") {
    return VideoModule.createPlayer(name);
  }

  getConsoleLog(element) {
    element.addListener('onVideoStatusChanged', (event) => {
      event.duracao = moment.utc(event.duration * 1000).format('HH:mm:ss');
      event.posicaoTempo = moment.utc(event.position * 1000).format('HH:mm:ss');
      console.log(event);
    });
  }

  play(url, stereo, startPosition = 0, muted = false, name = "video") {
    VideoModule.play(name, { source: { url: staticAssetURL(url) }, stereo, muted, startPosition });
    Environment.setBackgroundVideo(name);
  }

  pause(name = "video") {
    VideoModule.pause(name);
  }

  resume(name = "video") {
    VideoModule.resume(name);
  }

  stop(name = "video") {
    VideoModule.stop(name);
  }

};

AppRegistry.registerComponent('FunctionVideo', () => FunctionVideo);
