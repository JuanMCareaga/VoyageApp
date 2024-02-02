import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el ícono de FontAwesome
import hotel1 from "../../imageneshotel/hotel1.jpeg"; // Asegúrate de tener la imagen de hotel1 en tu proyecto
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    color: "red", // Puedes ajustar el color según tus necesidades
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10, // Añadido para bordes redondeados
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
    marginTop: 5, // Ajuste de estilo
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
});

const Carrousel6 = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
        <Icon
          name={isFavorite ? "heart" : "heart-o"}
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
        <Text>Hotel Stanford</Text>
      </View>
      <View style={styles.geoAltIcon}>
        <Icon name="map-marker" size={18} color="black" />
        <Text style={{ marginLeft: 5 }}>Paris</Text>
      </View>
      <View style={styles.tarjetFoot}>
        <View style={styles.price}>
          <Text>$25</Text>
          <Text style={styles.subtextCarousel}>/night</Text>
        </View>
        <View style={styles.score}>
          <View style={styles.iconStar}>
            <Icon name="star" size={16} color="gold" />
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

export default Carrousel6;
