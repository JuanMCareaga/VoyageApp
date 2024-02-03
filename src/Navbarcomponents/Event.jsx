import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Asegúrate de instalar esta librería

function DropdownEvent() {
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
        <Text style={styles.dropdownText}>Event</Text>
        <Icon name="chevron-down-outline" size={24} color="#111827" />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.droplink}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.droplink}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.droplink}>Entertainment</Text>
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
    fontSize: 14,
    lineHeight: 24,
    textDecorationLine: "none",
    color: "#333",
  },
});

export default DropdownEvent;
