import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome"; // Asegúrate de tener FontAwesome instalado

import hotel1 from "../../imageneshotel/hotel1.jpeg"; // Asegúrate de tener la imagen de hotel1 en tu proyecto
import { styles } from "./carrouselStyles"; // Puedes crear un archivo styles.js para definir tus estilos

const Carrousel8 = () => {
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
        <Text style={styles.geoAltText}>Paris</Text>
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

export default Carrousel8;
