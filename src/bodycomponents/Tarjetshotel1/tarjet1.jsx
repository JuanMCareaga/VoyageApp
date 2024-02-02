import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import heartFillIcon from "../../imageneshotel/heart-fill-icon.png"; // Asegúrate de tener el icono de corazón en formato PNG
import styles from "../carrouselglobal.styles"; // Importa tus estilos de carrouselglobal.css

const images = [hotel1, hotel1, hotel1]; // Reemplaza con tus imágenes reales

const Carrousel1 = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderCarouselItem = ({ item, index }) => (
    <View key={index} style={styles.carouselItem}>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
        <Image
          source={isFavorite ? heartFillIcon : null}
          style={styles.heartIcon}
        />
      </TouchableOpacity>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.containerCarrousel}>
      <Carousel
        data={images}
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
            {/* Agrega tu icono de estrella aquí */}
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

export default Carrousel1;
