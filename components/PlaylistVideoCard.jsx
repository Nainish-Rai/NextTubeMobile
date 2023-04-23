import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const PlaylistVideoCard = ({
  title,
  videoId,
  author,
  authorId,
  authorUrl,
  thumbnail,
  index,
  lengthSeconds,
}) => {
  return (
    <View className="w-full flex flex-row gap-5 my-3 max-w-full">
      <View>
        <Image
          source={{ uri: thumbnail }}
          className="object-cover relative rounded-2xl"
          style={{ width: 150, height: 80 }}
        />
      </View>
      <View className="max-w-[50%] flex gap-1">
        <Text className="text-white">{title}</Text>
        <Text className="text-white/80">{author}</Text>
      </View>
    </View>
  );
};

export default PlaylistVideoCard;
