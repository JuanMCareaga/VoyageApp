import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

function DropdownTour() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <DropContainer>
      <TouchableOpacity onPress={handleToggleDropdown}>
        <View style={styles.dropdownTrigger}>
          <Text>Tour</Text>
          <View style={styles.arrow}>
            {/* Puedes incluir tu icono aquí */}
            {/* <ion-icon name="chevron-down-outline" /> */}
          </View>
        </View>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity>
            <Text style={styles.droplink}>Historic places</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.droplink}>Beachs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.droplink}>Cities</Text>
          </TouchableOpacity>
        </View>
      )}
    </DropContainer>
  );
}

export default DropdownTour;

const DropContainer = styled.View`
  padding-right: 30px;
`;

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 3,
    marginTop: 4,
  },
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    lineHeight: 24,
    textDecorationLine: "none",
    padding: 0.2,
    marginBottom: 5,
    borderRadius: 10,
    cursor: "pointer",
    color: "#111827",
    backgroundColor: "rgba(128, 128, 128, 0.1)",
  },
  dropdownMenu: {
    fontFamily: "Poppins",
    color: "#111827",
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "none",
    marginRight: "1rem",
    padding: 0.2,
    borderRadius: 10,
    position: "absolute",
    top: "100%",
    left: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
  },
  droplink: {
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "none",
    color: "#333",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(128, 128, 128, 0.4)",
  },
});
