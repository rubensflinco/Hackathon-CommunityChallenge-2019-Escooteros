import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Environment, staticAssetURL
} from 'react-360';
import VideoModule from 'VideoModule';

const player = VideoModule.createPlayer('myPlayer');
player.play({ source: {url: staticAssetURL('video.mp4')}, stereo: '2D' });


export default class Hackathon_CommunityChallenge_2019 extends React.Component {

  
  // inside class component
  componentDidMount() {
    Environment.setBackgroundVideo('myPlayer');
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
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
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
