import { View, Text , Image } from 'react-native'
import React from 'react'

const VideoCard = ({
    videoId,
    title,
    channelTitle,
    channelId,
    viewCount,
    publishText,
    lengthText,
    thumbnail,
    channelThumbnail,
}) => {
  return (
    <View>
      <View>
        <Text>Video Card</Text>
      <Image source={{uri : thumbnail}} className="w-full h-72 relative" />
      </View>
    </View>
  )
}

export default VideoCard