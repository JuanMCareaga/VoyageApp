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

const styles = StyleSheet.create({
  videoTotalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 100,
  },
  videosContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgVideo: {
    width: '100%',
    height: 130,
    borderRadius: 30,
    cursor: 'pointer',
    transform: [{ scale: 1 }],
    transition: 'transform 0.3s ease',
  },
  imgVideoHover: {
    transform: [{ scale: 1.2 }],
  },
  linksVideo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    marginBottom: 20,
    borderRadius: 30,
    width: '100%',
  },
  playButton: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 2,
  },
  playButtonPrincipal: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 2,
    left: 510,
  },
  iconVideo: {
    color: '#f2f2f2',
  },
  youtubeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
    borderRadius: 40,
  },
  video: {
    borderRadius: 30,
  },
  none: {
    display: 'none',
  },
  titleVideos: {
    marginLeft: 40,
    marginBottom: 20,
    fontFamily: 'Poppins',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#111827',
    lineHeight: 40,
  },
  subtitleVideos: {
    marginLeft: 40,
    marginBottom: 100,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#6b7280',
    lineHeight: 28,
  },
  mediaQuery: {
    videosContainer: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
    },
    video: {
      borderRadius: 30,
      width: 500,
    },
    youtubeContainer: {
      marginBottom: 30,
      height: 200,
      width: '100%',
      borderRadius: 30,
    },
    subtitleVideos: {
      marginBottom: 50,
      marginRight: '10%',
      fontFamily: 'Poppins',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      color: '#6b7280',
      lineHeight: 28,
      textAlign: 'center',
    },
  },
});


export default VideoPlayer;

