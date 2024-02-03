import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Slider from "react-native-slick";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import angeles from "../../imagenes/angeles.jpg";

function Tarjethotelsearch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavoritoEvent, setIsFavoritoEvent] = useState(false);
  const navigation = useNavigation();

  const NextArrow = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{">"}</Text>
    </TouchableOpacity>
  );

  const PrevArrow = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{"<"}</Text>
    </TouchableOpacity>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const renderCustomDots = () => {
    const slides = Array.from({ length: 3 }, (_, index) => index);
    return (
      <View style={{ flexDirection: "row" }}>
        {slides.map((index) => (
          <TouchableOpacity
            key={index}
            style={{
              marginHorizontal: 5,
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: index === currentSlide ? "blue" : "gray",
            }}
            onPress={() => setCurrentSlide(index)}
          />
        ))}
      </View>
    );
  };

  const handleFavoritoClickEvent = () => {
    setIsFavoritoEvent(!isFavoritoEvent);
  };

  return (
    <View style={{ margin: 10 }}>
      <View>
        <Slider {...settings}>
          <Image style={{ width: "100%", height: 200 }} source={angeles} />
          <Image style={{ width: "100%", height: 200 }} source={angeles} />
          <Image style={{ width: "100%", height: 200 }} source={angeles} />
        </Slider>
        {renderCustomDots()}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("HotelIndividual")}>
        <View>{/* Resto de tu contenido */}</View>
      </TouchableOpacity>
    </View>
  );
}

export default Tarjethotelsearch;
