import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment, 
  VideoModule, 
  staticResourceURL
} from 'react-360';

import {} from 'react-360';

// Create a player
const player = VideoModule.createPlayer('myplayer');
// Play a specific video
player.play({
  source: {url: staticResourceURL('video.mp4')}, // provide the path to the video
  stereo: '3DTB', // optionally, supply the format of the video
});
// Display the background video on the Environment
Environment.setBackgroundVideo('myplayer'); // or you can use player._player which is same value
// Or, play in-line on a surface
Environment.setScreen(
  'default', /* screen name */
  'myplayer', /* player unique id */
  'default', /* surface name */
  0, 0, 600, 400 /* relative position on the surface */
);

export default class Hackathon_CommunityChallenge_2019 extends React.Component {
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
