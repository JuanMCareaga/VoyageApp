import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Importa una librería de iconos compatible con React Native (por ejemplo, react-native-vector-icons)
// import Icon from "react-native-vector-icons/Ionicons";

function DropdownCar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownTrigger}
        onPress={handleDropdownToggle}
      >
        <Text style={styles.dropdownText}>Car</Text>
        {/* Reemplaza ion-icon con un componente de iconos compatible */}
        {/* <Icon name="chevron-down-outline" size={24} color="#111827" /> */}
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.droplink}>Chevrolet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.droplink}>Ford</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.droplink}>Lamborghini</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
  },
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    lineHeight: 24,
    textDecorationLine: "none",
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
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#111827",
  },
  droplink: {
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "none",
    color: "#333",
  },
});

export default DropdownCar;
