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
  mapa: {
    position: 'absolute',
    left: 849,
    width: 800,
    height: 760,
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  markerText: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
    lineHeight: 20,
    color: '#111827',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 30,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});

export default CustomMap;
