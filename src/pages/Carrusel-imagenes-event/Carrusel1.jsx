import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Icon } from "react-native-elements";

import explore from "../../imagenes/explore.jpg";

const Carrusel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavoritoEvent, setIsFavoritoEvent] = useState(false);

  const NextArrow = ({ onPress }) => (
    <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
      <Icon name="arrow-right-short" type="ionicon" size={20} />
    </TouchableOpacity>
  );

  const PrevArrow = ({ onPress }) => (
    <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
      <Icon name="arrow-left-short" type="ionicon" size={20} />
    </TouchableOpacity>
  );

  const renderCustomDots = () => {
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={currentSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    );
  };

  const handleFavoritoClickEvent = () => {
    setIsFavoritoEvent(!isFavoritoEvent);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imgContainer}>
      <Image source={explore} style={styles.imgEventCarrusel} />
    </View>
  );

  return (
    <View>
      <View style={styles.carruselContainerEvent}>
        <Carousel
          data={[{}, {}, {}]}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
          onSnapToItem={(index) => setCurrentSlide(index)}
          renderNextButton={() => <NextArrow onPress={() => {}} />}
          renderPrevButton={() => <PrevArrow onPress={() => {}} />}
        />
        {renderCustomDots()}
        <TouchableOpacity
          style={[
            styles.favoritoIcon,
            isFavoritoEvent ? styles.favoritoClick : null,
          ]}
          onPress={handleFavoritoClickEvent}
        >
          <Icon
            name="heart-fill"
            type="ionicon"
            size={16}
            color={isFavoritoEvent ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footerCarrusel}>
        <View style={styles.footerHeaderCarrusel}>
          <Icon name="geo-alt" type="ionicon" size={18} />
          <Text style={styles.footerHeaderText}>2 Warner Alley</Text>
        </View>
        <Text style={styles.footerBodyCarrusel}>
          Generate Interactive Markets
        </Text>
        <View style={styles.footerFooterCarrusel}>
          <View style={styles.flex}>
            <Text style={styles.price}>$200</Text>
            <Text style={styles.subtextCarousel}>/person</Text>
          </View>
          <View style={styles.flex}>
            <View style={styles.score}>
              <View style={styles.iconstar}>
                <Icon name="star-fill" type="ionicon" size={16} />
              </View>
              <Text style={styles.scoreNumber}>3.4</Text>
              <Text style={styles.subtextCarousel}>(15)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carruselContainerEvent: {
    // Estilos para tu carrusel
  },
  imgContainer: {
    // Estilos para tu img-container
  },
  imgEventCarrusel: {
    // Estilos para tu img-event-carrusel
  },
  arrowContainer: {
    // Estilos para tu arrow-container
  },
  paginationContainer: {
    // Estilos para tu pagination-container
  },
  dotStyle: {
    // Estilos para tu dot
  },
  inactiveDotStyle: {
    // Estilos para tu dot inactivo
  },
  favoritoIcon: {
    // Estilos para tu favorito-icon
  },
  favoritoClick: {
    // Estilos para tu favorito-icon clickeado
  },
  footerCarrusel: {
    // Estilos para tu footer-carrusel
  },
  footerHeaderCarrusel: {
    // Estilos para tu footer-header-carrusel
  },
  footerHeaderText: {
    // Estilos para tu texto del footer
  },
  footerBodyCarrusel: {
    // Estilos para tu footer-body-carrusel
  },
  footerFooterCarrusel: {
    // Estilos para tu footer-footer-carrusel
  },
  flex: {
    // Estilos para tu contenedor flex
  },
  price: {
    // Estilos para tu precio
  },
  subtextCarousel: {
    // Estilos para tu subtexto del carrusel
  },
  score: {
    // Estilos para tu puntuación
  },
  iconstar: {
    // Estilos para tu icono de estrella
  },
  scoreNumber: {
    // Estilos para tu número de puntuación
  },
});

export default Carrusel1;
