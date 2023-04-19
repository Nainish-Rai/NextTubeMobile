import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import VideoCard from "../components/VideoCard";
import { ScrollView } from "react-native";
import VideoList from "../containers/VideoList";
import { Image } from "react-native";

const ChannelScreen = ({ route, navigation }) => {
  const { channelId } = route.params;
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  console.log(channelId);

  useEffect(() => {
    api(`channels/${channelId}`).then((response) => {
      setData(response);
      setVideoData(response.latestVideos);
    });
  }, [channelId]);
  console.log(data);
  return (
    <ScrollView className="bg-black h-full">
      <View>
        <Image
          source={{ uri: data.authorBanners && data.authorBanners[2].url }}
          className="h-48 w-full rounded-b-2xl"
        />
      </View>
      {/* Channel Info */}
      <View className="flex flex-row p-4 pt-6">
        <View className="flex justify-center items-center">
          <Image
            source={{
              uri: data.authorThumbnails && data.authorThumbnails[4].url,
            }}
            className="h-24 aspect-square rounded-full"
          />
        </View>
        <View className="flex p-3 ml-4">
          <Text className="text-white font-thin text-3xl">
            {data.author}
          </Text>
          <Text className="text-gray-300 font-medium text-xl">
            {data.subCount < 1000000
              ? Math.floor(data.subCount / 1000) + "K"
              : Math.floor(data.subCount / 1000000) + "M"}{" "}
            Subscribers
          </Text>
        </View>
      </View>
      {/* Latest Videos */}
      <View className="mt-4">
                <Text className="text-white text-3xl ml-6">Latest Videos</Text>
      <VideoList data={videoData && videoData} />
      </View>
    </ScrollView>
  );
};

export default ChannelScreen;
