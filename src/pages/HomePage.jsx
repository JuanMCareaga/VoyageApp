import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Carousel } from "react-native-snap-carousel";
import "react-native-snap-carousel/styles/entry/scrollviewStyle";

import desierto from "../imagenes/desierto.gif";
import Cascada from "../imagenes/Cascada.gif";
import bosqueestrella from "../imagenes/bosqueestrella.gif";
import Body from "../Bodycomponents/Body";
import Tarjets from "../Bodycomponents/Tarjets";
import Tarjetsuggestiondestins from "../Bodycomponents/Tarjetssugestion";
import Footer from "../Bodycomponents/footer";
import Videos from "../Bodycomponents/Videos";

const HomePage = () => {
  const carouselSettings = {
    loop: true,
    autoplay: true,
    autoplayInterval: 5000,
    inactiveSlideScale: 1,
    inactiveSlideOpacity: 0.7,
    renderItem: ({ item }) => (
      <View>
        <Image source={item.image} style={{ width: "100%", height: 200 }} />
        <Text>{item.title}</Text>
        <Text>{item.subtitle}</Text>
        {/* Add your social media icons here */}
      </View>
    ),
  };

  const carouselItems = [
    {
      image: desierto,
      title: "Live the adventure",
      subtitle: "Discover\nThe Universe",
    },
    {
      image: Cascada,
      title: "Live the adventure",
      subtitle: "Discover\nNew Places",
    },
    {
      image: bosqueestrella,
      title: "Live the adventure",
      subtitle: "Discover\nNew Places",
    },
  ];

  return (
    <View>
      <Carousel
        data={carouselItems}
        renderItem={carouselSettings.renderItem}
        sliderWidth={300}
        itemWidth={300}
        {...carouselSettings}
      />

      {/* Rest of your components */}
      <Body />
      <Tarjets />
      <Videos />
      <Tarjetsuggestiondestins />
    </View>
  );
};

export default HomePage;
