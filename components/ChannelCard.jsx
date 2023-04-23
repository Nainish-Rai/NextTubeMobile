import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const ChannelCard = ({
  author,
  authorId,
  thumbnail,
  subCount,
  videoCount,
  description,
}) => {
    console.log(thumbnail)
  return (
    <View className="w-full h-36 bg-gray-300/10 rounded-3xl my-3 p-3 border border-white">
      <View className="w-full flex flex-row">
        <Image
          source={{ uri: thumbnail }}
          className="rounded-full"
          style={{width: 50, height: 50}}
        />
        <View>
          <Text className="text-white">{author}</Text>
          <Text className="text-white"> {subCount < 1000000
                ? Math.floor(subCount / 1000) + "K"
                : Math.floor(subCount / 1000000) + "M"} subscribers</Text>
        </View>
      </View>
    </View>
  );
};

export default ChannelCard;
