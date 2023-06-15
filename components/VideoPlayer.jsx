import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return null; // Return null or an error component if the videoUrl is not provided
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={true}
        paused={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default VideoPlayer;
