import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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
    <View>
      <View>
        <Slider {...settings}>
          <Image style={{ width: "100%", height: 200 }} source={angeles} />
          <Image style={{ width: "100%", height: 200 }} source={angeles} />
          <Image style={{ width: "100%", height: 200 }} source={angeles} />
        </Slider>
        {renderCustomDots()}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Individual")}>
        <View>{/* Resto de tu contenido */}</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjetContainer: {
    display: 'flex',
    marginTop: 50,
    marginLeft: 40,
    cursor: 'pointer',
    borderRadius: 20,
  },
  tarjetImg: {
    width: 300,
    height: 250,
    borderRadius: '15px 0 0 15px', // React Native doesn't support individual border radius for each corner
  },
  bodyTarjetContent: {
    width: 450,
  },
  subtitleContent: {
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#6b7280',
  },
  titleContent: {
    paddingLeft: 25,
    marginBottom: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#111827',
  },
  infoTarjetContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#6b7280',
  },
  infoTarjet: {
    width: 100,
    paddingBottom: 20,
  },
  footerTarjetContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  scoreTarjet: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  score: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    color: '#111827',
  },
  priceTarjet: {
    display: 'flex',
  },
  priceNumber: {
    fontFamily: 'Poppins',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '500',
    color: '#39dacd',
  },
  priceWord: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#6b7280',
  },
  carruselContainerHotel: {
    width: 300,
    height: 250,
    position: 'relative',
  },
  imgContainerHotel: {
    width: 300,
    height: 250,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  imgHotelCarrusel: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  // Media Query for screens with max-width: 720px
  '@media (max-width: 720)': {
    tarjetContainer: {
      display: 'grid',
      width: '100%',
      marginTop: 50,
      marginLeft: 40,
      cursor: 'pointer',
      borderRadius: 20,
    },
    bodyTarjetContent: {
      width: '75%',
    },
    sinDecoracion: {
      width: '100%',
    },
    carruselContainerHotel: {
      width: 350,
      height: 250,
      position: 'relative',
    },
  },
});


export default Tarjethotelsearch;
