import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

const hotel1 = require("../../imageneshotel/hotel1.jpeg"); // Asegúrate de tener la imagen de hotel1 en tu proyecto

const styles = {
  containerCarrousel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  heartIcon: {
    width: 30,
    height: 30,
    tintColor: "red", // Puedes ajustar el color según tus necesidades
  },
  image: {
    width: 300,
    height: 200,
  },
  headerSubtextCarousel: {
    marginTop: 10,
  },
  textCarousel: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  geoAltIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  tarjetFoot: {
    marginTop: 10,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtextCarousel: {
    marginLeft: 5,
  },
  score: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  iconStar: {
    marginRight: 5,
  },
  scoreNumber: {
    fontWeight: "bold",
    marginRight: 5,
  },
};

const Carrousel3 = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
        <Image
          source={
            isFavorite
              ? require("../../imageneshotel/heart-fill-icon.png")
              : null
          }
          style={styles.heartIcon}
        />
      </TouchableOpacity>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.containerCarrousel}>
      <Carousel
        data={[hotel1, hotel1, hotel1]} // Reemplaza con tus imágenes reales
        renderItem={renderCarouselItem}
        sliderWidth={300}
        itemWidth={300}
      />
      <View style={styles.headerSubtextCarousel}>
        <Text>Entire cabin - 10 bed</Text>
      </View>
      <View style={styles.textCarousel}>
        <Text>Hotel stanford</Text>
      </View>
      <View style={styles.headerSubtextCarousel}>
        <View style={styles.geoAltIcon}>
          <Text>Paris</Text>
        </View>
      </View>
      <View style={styles.tarjetFoot}>
        <View style={styles.price}>
          <Text>$25</Text>
          <Text style={styles.subtextCarousel}>/night</Text>
        </View>
        <View style={styles.score}>
          <View style={styles.iconStar}>
            <Text>*</Text>
          </View>
          <View style={styles.scoreNumber}>
            <Text>3.4</Text>
          </View>
          <View style={styles.subtextCarousel}>
            <Text>(15)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Carrousel3;
