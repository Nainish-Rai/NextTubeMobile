import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import VideoCard from '../components/VideoCard'
import { api } from '../utils/api'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
    
  const [data, setData] = useState([]);
    useEffect(()=>{
        api(`trending?maxResults=10`).then((response)=>setData(response))
    },[])
  return (
    <ScrollView>
      <Text>Home</Text>
      <View className="flex flex-wrap lg:ml-1 md:px-2 ">
          {data.map((item) => { 
            return ( item.lengthSeconds > 60  &&
              <VideoCard
                videoId={item.videoId}
                title={item.title}
                channelTitle={item.author}
                channelId={item.authorId}
                viewCount={item.viewCount}
                publishText={item.publishedText}
                lengthText={item.lengthSeconds}
                thumbnail={item.videoThumbnails[4].url}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          })}
        </View>
      </ScrollView>
  )
}

export default Home