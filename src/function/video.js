import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
} from 'react-360';
import VideoModule from 'VideoModule';


export default class Video extends React.Component {

  constructor(props) {
    super(props);
  }

  create(name = "video") {
    return VideoModule.createPlayer(name);
  }

  get(element, name = "video") {
    element.addEventListener('onVideoStatusChanged', (event) => {
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

};

AppRegistry.registerComponent('Video', () => Video);
