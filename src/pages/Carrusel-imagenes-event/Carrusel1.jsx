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
    width: 400,
    height: 400,
    position: 'relative',
  },
  imgContainer: {
    width: 400,
    height: 400,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  imgEventCarrusel: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  footerCarrusel: {
    width: 400,
  },
  footerHeaderCarrusel: {
    paddingTop: 10,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#6b7280',
    lineHeight: 20,
  },
  footerBodyCarrusel: {
    paddingTop: 10,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#111827',
    lineHeight: 24,
  },
  footerFooterCarrusel: {
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  flecha: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }],
    zIndex: 1,
  },
  flechaSiguiente: {
    right: 10,
  },
  flechaAtras: {
    left: 10,
  },
  customDots: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    bottom: 10,
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  customDotsLi: {
    display: 'inline-block',
    margin: 0,
    height: '100%',
  },
  customDotsLiButton: {
    backgroundColor: 'rgb(243, 237, 237)',
    borderWidth: 1,
    padding: 4,
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  customDotsLiActiveButton: {
    backgroundColor: 'white',
    padding: 6,
  },
  favoritoIcon: {
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    display: 'flex',
    color: 'white',
    borderRadius: 50,
    marginTop: 20,
    marginRight: 20,
    padding: 8,
    width: 30,
    height: 30,
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  favoritoClick: {
    color: 'red',
  },
});

export default Carrusel1;
