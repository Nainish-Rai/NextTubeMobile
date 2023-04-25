import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

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
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="w-full flex flex-row gap-5 my-3 max-w-full" onPress={()=>navigation.navigate("VideoScreen",{videoId})}>
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
    </TouchableOpacity>
  );
};

export default PlaylistVideoCard;
