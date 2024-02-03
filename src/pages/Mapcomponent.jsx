import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

const MapComponent = () => {
  useEffect(() => {
    // Código para acciones después del montaje (si es necesario)
  }, []);

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
        <Marker coordinate={{ latitude: 51.5, longitude: -0.09 }}>
          <View style={styles.marker}>
            <Text>A pretty CSS popup.{"\n"}Easily customizable.</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default MapComponent;
