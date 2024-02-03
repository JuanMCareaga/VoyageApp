import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

function CustomMap() {
  const customMarker = (
    <View style={styles.customMarker}>
      <Text style={styles.markerText}>$30</Text>
    </View>
  );

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.505,
          longitude: -0.09,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 51.505, longitude: -0.09 }}>
          {customMarker}
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  customMarker: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  markerText: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default CustomMap;
