import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";


const VideoDetails = ({
  id,
  title,
  author,
  description,
  viewCount,
  publishedText,
  channelId,
  authorThumbnails,
  subCountText,
}) => {
  
 const [readmore,setReadmore] = useState(false)
  return (
    <View className="px-2 bg-white/10 rounded-b-2xl">
      <View>
        <Text className="text-white font-semibold text-xl ">{title}</Text>
      </View>
      <View>
        <Text className="text-gray-100">
          {readmore?description:description && description.slice(0,50)}
        </Text>
        <Text className="text-white" onPress={()=>setReadmore(!readmore)}>{readmore?"Read More...":"Read Less"}</Text>
        
      </View>
    </View>
  );
};

export default VideoDetails;
