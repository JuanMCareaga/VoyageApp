import React from "react";
import { View, Image, StyleSheet } from "react-native";
import casaplaya from "../imagenes/casaplaya.jpg";
import mountain from "../imagenes/mountain.webp";
import playa from "../imagenes/playa.webp";

function Images() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainerimg}>
        <Image style={styles.image1} source={casaplaya} />
        <Image style={styles.image2} source={playa} />
      </View>
      <Image style={styles.image3} source={mountain} />
    </View>
  );
}

export default Images;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  subcontainerimg: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image1: {
    height: 300,
    width: 400,
    paddingBottom: 20,
  },
  image2: {
    height: 300,
    width: 400,
  },
  image3: {
    height: 615,
    width: 400,
    marginLeft: 10,
  },
});
