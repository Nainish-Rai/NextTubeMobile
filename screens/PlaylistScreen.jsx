import { View, Text } from "react-native";
import React from "react";
import { api } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Image } from "react-native";
import PlaylistVideoCard from "../components/PlaylistVideoCard";
import { ScrollView } from "react-native";

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
        <Image
          source={{ uri: data.videos[0].videoThumbnails[3].url}}
          className=" rounded-b-3xl"
          style={{width: "100%", height: 200}}
        />
        </View>
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
