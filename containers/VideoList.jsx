import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import VideoCard from "../components/VideoCard";
import React from "react";
import ChannelCard from "../components/ChannelCard";
import PlaylistCard from "../components/PlaylistCard";

const VideoList = ({ data }) => {
  return (
    <ScrollView className="px-4">
      {data.map((item, index) => {
        if (item.type == "channel") {
          return (
            <ChannelCard
              title={item.author}
              author={item.author}
              authorId={item.authorId}
              subCount={item.subCount}
              videoCount={item.videoCount}
              description={item.description && item.description}
              // lengthText={item.lengthSeconds}
              thumbnail={
                item.authorThumbnails[0].url
                  ? item.authorThumbnails[0].url
                  : item.authorThumbnails[1].url
              }
              // channelThumbnail={item.channelThumbnail[0].url}
            />
          );
        }
        if (item.type == "video") {
          return (
            <VideoCard
              key={index}
              videoId={item.videoId}
              title={item.title}
              channelTitle={item.author}
              channelId={item.authorId}
              viewCount={item.viewCount}
              publishText={item.publishedText}
              lengthText={item.lengthSeconds}
              thumbnail={item.videoThumbnails && item.videoThumbnails[3].url}
              // channelThumbnail={item.channelThumbnail[0].url}
            />
          );
        }
        if (item.type == "playlist") {
          return (
            <PlaylistCard
              title={item.title}
              channelTitle={item.author}
              channelId={item.authorId}
              videoCount={item.videoCount}
              playData={item.videos}
              playId={item.playlistId}
              // lengthText={item.lengthSeconds}
              thumbnail={item.playlistThumbnail && item.playlistThumbnail}
              // channelThumbnail={item.channelThumbnail[0].url}
            />
          );
        }
      })}
    </ScrollView>
  );
};

export default VideoList;
