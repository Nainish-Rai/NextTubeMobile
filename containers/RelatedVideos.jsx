import { View, Text } from 'react-native'
import React from 'react'
import VideoCard from '../components/VideoCard'

const RelatedVideos = ({data}) => {
  return ( data?
    <View className="bg-black">
      {data && data.map((item,index) => {
          return (
            <VideoCard
            key={index}
              videoId={item.videoId}
              title={item.title}
              channelTitle={item.author}
              channelId={item.authorId}
              viewCount={item.viewCountText}
              // publishText={item.publishedTimeText}
              lengthText={item.lengthSeconds}
              thumbnail={item.videoThumbnails && item.videoThumbnails[4].url}
              // channelThumbnail={item.authorThumbnail}
            />
          );
        })}
    </View>:<View className="h-screen bg-black"><Text className=" text-6xl text-white">Loading..........</Text>
      </View>
  )
}

export default RelatedVideos