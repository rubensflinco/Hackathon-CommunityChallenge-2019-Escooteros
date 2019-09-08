import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment, 
  staticAssetURL,
  VrButton
} from 'react-360';
import VideoModule from 'VideoModule';

VideoModule.createPlayer('myPlayer');
VideoModule.play('myPlayer', { source: { url: staticAssetURL('video.mp4') }, stereo: '2D' });


export default class Hackathon_CommunityChallenge_2019 extends React.Component {

  
  // inside class component
  componentDidMount() {
    Environment.setBackgroundVideo('myPlayer');
  }

  clickBotao() {
    VideoModule.play('myPlayer', { source: { url: staticAssetURL('video2.mp4') }, stereo: '2D' });
    Environment.setBackgroundVideo('myPlayer');
  }

  clickBotaoPause() {
    VideoModule.pause('myPlayer');
  }

  clickBotaoResume() {
    VideoModule.resume('myPlayer');
  }

  render() {
    return (
      <View style={styles.panel}>
          <VrButton onClick={() => { this.clickBotao() }} style={styles.greetingBox}>
            <Text style={styles.greeting}>Video 2</Text>
          </VrButton>

          <VrButton onClick={() => { this.clickBotaoPause() }} style={styles.greetingBox}>
            <Text style={styles.greeting}>Pause</Text>
          </VrButton>

          <VrButton onClick={() => { this.clickBotaoResume() }} style={styles.greetingBox}>
            <Text style={styles.greeting}>Resume</Text>
          </VrButton>
      </View>
    );
  }


};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    margin: '5px',
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
