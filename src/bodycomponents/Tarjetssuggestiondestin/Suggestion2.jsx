import React from "react";
import { View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import casa from "../../imagenes/casa.jpeg";
import styles from "./suggestiondestinsStyles"; // Asegúrate de tener un archivo de estilos adecuado

const Suggestion2 = () => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Image source={casa} style={styles.imgDestin} />
      <Text style={styles.text}>Enjoy the great cold</Text>
      <Text style={styles.properties}>17.000 properties</Text>
    </Card>
  );
};

export default Suggestion2;
