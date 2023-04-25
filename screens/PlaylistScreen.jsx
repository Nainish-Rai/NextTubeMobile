import { View, Text } from "react-native";
import React from "react";
import { api } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Image } from "react-native";
import PlaylistVideoCard from "../components/PlaylistVideoCard";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

const PlaylistScreen = ({ route, navigation }) => {
  const { playId } = route.params;
  const [videosData, setVideosData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    api(`playlists/${playId}`).then((response) => {
      setVideosData(response.videos);
      setData(response);
    });
  }, [playId]);
  console.log(data);
  return (
    <ScrollView className="bg-black h-full w-full py-12">
      <View>
        <ImageBackground
          className="relative rounded-b-3xl overflow-hidden shadow-2xl shadow-black"
          source={{ uri: data.playlistThumbnail && data.playlistThumbnail }}
          style={{ width: "100%", height: 375 }}
          blurRadius={24}
        >
          <View className="w-full bg-black/40 flex space-y-2 items-center pt-8 h-full">
            <Image
              source={{
                uri: data.videos && data.videos[0].videoThumbnails[3].url,
              }}
              style={{ width: "80%", height: 180 }}
              className="rounded-3xl mb-2"
            />
            <Text className="text-white  text-3xl">{data.title}</Text>
            <Text
              className="text-white/80
             text-lg"
            >
              {data.author}
            </Text>
            <View className="flex flex-row space-x-2">
              <Text className="text-white ">
              {data.videoCount} videos
              </Text>
              <Text className="text-white ">{data.viewCount < 1000000
                      ? Math.floor(data.viewCount / 1000) + "K"
                      : Math.floor(data.viewCount / 1000000) + "M"}{" "}
                    views</Text>
            </View>
          </View>
        </ImageBackground>
        {/* <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          className="absolute top-0 left-0 h-full w-full"
        /> */}
      </View>
      {/* Videos Section */}
      <View className="px-4">
        {videosData.map((item, index) => {
          return (
            <PlaylistVideoCard
              key={index}
              title={item.title}
              videoId={item.videoId}
              author={item.author}
              authorId={item.authorId}
              thumbnail={item.videoThumbnails && item.videoThumbnails[4].url}
              lengthSeconds={item.lengthSeconds}
              index={item.index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PlaylistScreen;
