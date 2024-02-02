import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Images from "./Images";
import Searcher from "./Searcher";

function Body() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBtn}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Hi There! Where would you like to go?
          </Text>
          <Text style={styles.description}>
            Choose any of our best destinations to enjoy and travel {"\n"}
            around the world.
          </Text>
          <Searcher />
        </View>
      </View>
      <Images />
    </View>
  );
}

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  titleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginLeft: 50, // Adjust as needed
    marginRight: 50, // Adjust as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#6b7280",
    fontWeight: "500",
    textAlign: "center",
  },
});
