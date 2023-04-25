import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const [readmore, setReadmore] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="p-4 pt-10 bg-gray-400/10 rounded-b-3xl">
      <View>
        <Text className="text-white font-medium text-lg my-1 ">{title}</Text>
        <Text className="text-gray-200 font-medium mb-1 ">
          Uploaded {publishedText}
        </Text>
      </View>
      {/* Channel Card */}
      <View className="my-3 mt-4 flex flex-row items-center justify-between">
        <View className="flex flex-row space-x-2 items-center">
          <Image
            source={{ uri: authorThumbnails }}
            className="w-10 aspect-square rounded-full"
          />
          <View className="flex flex-row flex-wrap gap-2 items-center max-w-lg">
            <Text onPress={()=>navigation.navigate("ChannelScreen",{channelId})} className="text-gray-50 text-lg mb-1 font-medium">
              {author}
            </Text>
            <Text className="text-gray-50 font-medium ">{subCountText}</Text>
          </View>
        </View>
        <View className="bg-white rounded-full font-medium px-5 py-2 ">
          <Text>Subscribe</Text>
        </View>
      </View>
      {/* Descirption */}
      <View className="mt-1">
        {readmore && (
          <Text className="text-gray-100">
            {/* {readmore?description:description && description.slice(0,50)} */}
            {description && description}
          </Text>
        )}
        <Text
          className="text-white font-semibold mt-2"
          onPress={() => setReadmore(!readmore)}
        >
          {!readmore ? "Show Description" : "Hide Description"}
        </Text>
      </View>
    </View>
  );
};

export default VideoDetails;
