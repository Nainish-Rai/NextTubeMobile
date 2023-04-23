import { View, Text, ScrollView } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../utils/api";
import React from "react";
import { Button } from "react-native";
import VideoDetails from "../containers/VideoDetails";
import RelatedVideos from "../containers/RelatedVideos";

const VideoScreen = ({ route, navigatiom }) => {
  const { videoId } = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    api(`videos/${videoId}`).then((response) => {
      setData(response);
    });
  }, [videoId]);
  //   console.log(data)
  const video = React.useRef(null);

  const [status, setStatus] = useState({});
  return (
    <View className="bg-black">
      {/* video player */}
      <View className="w-full z-10 overflow-hidden rounded-b-3xl border-b shadow-lg drop-shadow-xl bg-black shadow-black ">
        <Video
          ref={video}
          className=" h-64 w-full rounded-b-3xl"
          //  posterSource={{uri: data.videoThumbnails && data.videoThumbnails[4].url}}
          source={{
            uri:
              data.formatStreams &&
              data.formatStreams[data.formatStreams.length - 1].url,
          }}
          useNativeControls={true}
          // resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay={true}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <ScrollView className="-mt-5">
        <View className="pt-0">
          <VideoDetails
            id={videoId}
            title={data.title}
            author={data.author}
            description={data && data.description}
            // description={data.description && data.description}
            viewCount={data.viewCount}
            publishedText={data.publishedText}
            channelId={data.authorId}
            authorThumbnails={
              data.authorThumbnails && data.authorThumbnails[4].url
            }
            subCountText={data.subCountText}
          />
        </View>
        <View>
          <Text className="text-white font-medium text-2xl mt-4 ml-4">
            Related Videos
          </Text>
          <RelatedVideos data={data.recommendedVideos} />
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;
