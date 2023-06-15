import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import VideoCard from "../components/VideoCard";
import { api } from "../utils/api";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";

const Home = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  useEffect(() => {
    api(`trending?`).then((response) => setData(response));
  }, []);
  return data ? (
    <View
      className="bg-black dark:bg-black"
      style={{ marginTop: Constants.statusBarHeight }}
    >
      <NavBar />
      <ScrollView className="flex ">
        {data.map((item, index) => {
          return (
            item.lengthSeconds > 60 && (
              <VideoCard
                key={index}
                videoId={item.videoId}
                title={item.title}
                channelTitle={item.author}
                channelId={item.authorId}
                viewCount={item.viewCount}
                publishText={item.publishedText}
                lengthText={item.lengthSeconds}
                thumbnail={item.videoThumbnails[3].url}
                // channelThumbnail={item.channelThumbnail[1].url}
              />
            )
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <View className="h-full bg-black">
      <Text className="text-white text-6xl">Load horha h</Text>
    </View>
  );
};

export default Home;
