import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import VideoCard from "../components/VideoCard";
import { ScrollView } from "react-native";
import VideoList from "../containers/VideoList";
const SearchScreen = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const { searchTerm } = route.params;

  useEffect(() => {
    api(`search?q=${searchTerm}&region=IN`).then((response) => {
      setData(response);
    });
  }, [searchTerm]);
  console.log(data);
  return (
    <ScrollView className="bg-black h-full pt-10">
      {data? <VideoList data={data} />:
      <View className="h-full bg-white flex items-center justify-center">
        <Text className="text-white text-lg">Load horha hai</Text>
      </View>}
    </ScrollView>
  );
};

export default SearchScreen;
