import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PageHotel from "./PageHotel";
import Event from "./Event";
import PageCar from "./Pagecar";

const Reservador = () => {
  const [selectedSearch, setSelectedSearch] = useState("hotel");

  const [hotelClicked, setHotelClicked] = useState(false);
  const [carClicked, setCarClicked] = useState(false);
  const [eventClicked, setEventClicked] = useState(false);

  const handleHotelClick = () => {
    setHotelClicked(true);
    setCarClicked(false);
    setEventClicked(false);
    setSelectedSearch("hotel");
  };

  const handleAutoClick = () => {
    setCarClicked(true);
    setHotelClicked(false);
    setEventClicked(false);
    setSelectedSearch("car");
  };

  const handleEventoClick = () => {
    setEventClicked(true);
    setHotelClicked(false);
    setCarClicked(false);
    setSelectedSearch("event");
  };

  const renderSearchComponent = () => {
    if (selectedSearch === "hotel") return <PageHotel />;
    else if (selectedSearch === "car") return <PageCar />;
    else if (selectedSearch === "event") return <Event />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleHotelClick}
            style={[styles.searchButton, hotelClicked && styles.clickedButton]}
          >
            {hotelClicked && <Text style={styles.dot}>●</Text>} Hotel
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAutoClick}
            style={[styles.searchButton, carClicked && styles.clickedButton]}
          >
            {carClicked && <Text style={styles.dot}>●</Text>} Car
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleEventoClick}
            style={[styles.searchButton, eventClicked && styles.clickedButton]}
          >
            {eventClicked && <Text style={styles.dot}>●</Text>} Event
          </TouchableOpacity>
        </View>
        {renderSearchComponent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
  },
  clickedButton: {
    backgroundColor: "#ddd",
  },
  dot: {
    fontSize: 20,
  },
});

export default Reservador;
