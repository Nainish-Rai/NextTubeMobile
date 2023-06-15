import { View, Text, Image, ViewBase } from "react-native";
import React from "react";
import TickIcon from "../assets/check.svg";
import ThreeDotIcon from "../assets/EllipsisVertical.svg";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const VideoCard = ({
  handlePress,
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
  const navigation = useNavigation();
  return (
    <View className="w-full my-4">
      {/* Thumbnail */}
      <View className="overflow-hidden">
        <TouchableOpacity onPress={()=>navigation.navigate("VideoScreen",{videoId})}>
          <Image
            
            source={{ uri: thumbnail }}
            className="object-contain relative"
            style={{width: "100%", height: 240}}
          />
          
        </TouchableOpacity>
      </View>
      {/* Video Details */}
      <View>
        {/* <View>
        <Image source={{uri : channelThumbnail}} className="w-24 h-24 object-cover rounded-full" />
        </View> */}
        <View className="mt-2  px-3">
          <Text className="text-white text-base">{title}</Text>
          <View className="flex flex-row pt-1 gap-3">
            <Text className="text-gray-100 " onPress={()=>navigation.navigate("ChannelScreen",{channelId})}>{channelTitle}</Text>
            <Text className="text-gray-100">
              {viewCount < 1000000
                ? Math.floor(viewCount / 1000) + "K"
                : Math.floor(viewCount / 1000000) + "M"}{" "}
              Views
            </Text>
            <Text className="text-gray-100">{publishText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
