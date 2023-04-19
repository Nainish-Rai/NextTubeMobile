import { View, Text } from 'react-native'
import { ScrollView } from 'react-native'
import VideoCard from '../components/VideoCard'
import React from 'react'

const VideoList = ({data}) => {
  return (
    <ScrollView className="px-4">
                {data.map((item,index)=>{
                    if (item.type == "video") {
                        return (
                          <VideoCard
                            key={index}
                            videoId={item.videoId}
                            title={item.title}
                            channelTitle={item.author}
                            channelId={item.authorId}
                            viewCount={item.viewCount}
                            publishText={item.publishedText}
                            lengthText={item.lengthSeconds}
                            thumbnail={item.videoThumbnails && item.videoThumbnails[3].url}
                            // channelThumbnail={item.channelThumbnail[0].url}
                          />
                        );}  
                })}
    </ScrollView>
  )
}

export default VideoList