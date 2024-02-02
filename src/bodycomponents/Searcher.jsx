import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Searcher() {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Reservador"); // Asegúrate de tener una pantalla con el nombre "Reservador" en tu sistema de navegación
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={handleSearch}>
        <View style={styles.buttonContainer}>
          <Text style={styles.searchBtnText}>Start your search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Searcher;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 30,
    marginLeft: "25%",
  },
  buttonContainer: {
    borderRadius: 30,
    width: 180,
    height: 70,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnText: {
    fontFamily:
      "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: 16,
    fontWeight: "600",
    color: "#f9fafb",
  },
});
