import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import YouTube from "react-native-youtube";
import jersey from "../imagenes/jersey.jpg";

function VideoPlayer() {
  const videos = ["fOW8Y09GVek", "AY5qcIq5u2g", "H4tyzzP33Cw", "DsXMR7dY35w"];
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const playerRef = useRef(null);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
    playSelectedVideo();
  };

  const playSelectedVideo = () => {
    const player = playerRef.current;
    if (player) {
      player.seekTo(0);
      player.playVideo();
    }
  };

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, []);

  return (
    <View style={styles.videoTotalContainer}>
      <Text style={styles.titleVideos}>The Videos</Text>
      <Text style={styles.subtitleVideos}>
        Check out our hottest videos. View more and share more new perspectives
        on just about any topic. Everyones welcome.
      </Text>
      <View style={styles.videosContainer}>
        <View style={styles.youtubeContainer}>
          <YouTube
            videoId={selectedVideo}
            play={true}
            ref={(r) => (playerRef.current = r)}
          />
        </View>
        <View>
          {videos.map((videoId) => (
            <TouchableOpacity
              key={videoId}
              onPress={() => handleVideoClick(videoId)}
            >
              <Image
                key={videoId}
                source={{ uri: jersey }}
                style={styles.imgVideo}
              />
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => handleVideoClick(videoId)}
              >
                <Text style={styles.iconVideo}>▶</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = {
  videoTotalContainer: {
    paddingTop: 100,
    paddingBottom: 200,
    backgroundColor: "#F2E6D8",
    borderRadius: 30,
    marginBottom: 150,
    alignItems: "center",
  },
  titleVideos: {
    fontFamily:
      "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontWeight: "600",
    lineHeight: 40,
    fontSize: 36,
    color: "#111827",
    fontStyle: "normal",
    textAlign: "center",
  },
  subtitleVideos: {
    fontFamily:
      "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontWeight: "400",
    lineHeight: 28,
    fontSize: 20,
    color: "#6b7280",
    fontStyle: "normal",
    textAlign: "center",
    paddingVertical: 20,
  },
  videosContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  youtubeContainer: {
    width: 300,
    height: 200,
  },
  imgVideo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  iconVideo: {
    fontSize: 20,
    color: "#111827",
  },
};

export default VideoPlayer;
