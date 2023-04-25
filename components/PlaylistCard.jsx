import { View, Text } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import React from "react";

const PlaylistCard = ({
  videoId,
  title,
  channelTitle,
  channelId,
  viewCount,
  publishText,
  playId,
  playData,
  lengthText,
  thumbnail,
  videoCount,
  channelThumbnail,
}) => {
  const navigation = useNavigation();
  return (
    <View className="w-full my-4">
      {/* Thumbnail */}
      <View className="rounded-3xl overflow-hidden">
        <TouchableOpacity
          onPress={() => navigation.navigate("PlaylistScreen", { playId })}
        >
          <Image
            source={{
              uri: playData[0].videoThumbnails
                ? playData[0].videoThumbnails[4].url
                : thumbnail,
            }}
            className="object-cover relative"
            style={{ width: "100%", height: 220 }}
          />
          <View className="absolute bg-black/60 border-l border-gray-200/50 backdrop-blur-[2px] bottom-0 text-center flex justify-center flex-row items-center font-semibold right-0 w-28 h-full z-10">
            <Text className=" text-white">{videoCount}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Video Details */}
      <View>
        {/* <View>
    <Image source={{uri : channelThumbnail}} className="w-24 h-24 object-cover rounded-full" />
    </View> */}
        <View className="mt-2 mx-1">
          <Text className="text-white font-medium text-base">{title}</Text>
          <View className="flex flex-row pt-1 gap-3">
            <Text
              className="text-gray-100 "
              onPress={() =>
                navigation.navigate("ChannelScreen", { channelId })
              }
            >
              {channelTitle}
            </Text>
            <Text className="text-gray-100">{videoCount} Videos</Text>
            <Text className="text-gray-100">{publishText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaylistCard;
