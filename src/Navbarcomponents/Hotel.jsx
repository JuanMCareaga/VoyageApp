import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import paris from "../imagenes/paris.jpg";
import newyork from "../imagenes/Newyork.avif";
import california from "../imagenes/california.jpg";
import angeles from "../imagenes/angeles.jpg";
import jersey from "../imagenes/jersey.jpg";

function DropdownHotel() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DropContainer>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <View style={styles.dropdownTrigger}>
          <Text style={styles.dropdownText}>Hotel</Text>
          {/* Reemplaza ion-icon con un componente de iconos compatible con React Native */}
          {/* <Icon name="chevron-down-outline" size={24} color="#111827" /> */}
        </View>
        {isDropdownOpen && (
          <View style={styles.dropdownMenu}>
            <View style={styles.dropdownOption}>
              <Image source={paris} style={styles.imgHotel} />
              <Text style={styles.countryText}>France</Text>
              <TouchableOpacity style={styles.droplink} onPress={() => {}}>
                <Text>Paris</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.droplink} onPress={() => {}}>
                <Text>Burdeux</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.droplink} onPress={() => {}}>
                <Text>Lyon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.droplink} onPress={() => {}}>
                <Text>Marsella</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.droplink} onPress={() => {}}>
                <Text>Nantes</Text>
              </TouchableOpacity>
            </View>
            {/* Repite la estructura para las otras opciones de hotel */}
          </View>
        )}
      </TouchableOpacity>
    </DropContainer>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    paddingRight: 30,
  },
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    lineHeight: 24,
    padding: 5,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#111827",
    backgroundColor: "transparent",
  },
  dropdownText: {
    color: "#111827",
    marginRight: 5,
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#111827",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dropdownOption: {
    padding: 10,
  },
  imgHotel: {
    width: 180,
    height: 120,
    borderRadius: 10,
  },
  countryText: {
    fontWeight: "600",
  },
  droplink: {
    fontFamily: "Poppins",
    fontSize: 16,
    textDecorationLine: "none",
    color: "#333",
    marginTop: 5,
  },
});

export default DropdownHotel;
