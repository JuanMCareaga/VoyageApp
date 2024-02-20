import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import CheckBox from "react-native-checkbox";

const Filter4 = () => {
  const [showDropFilter4, setShowDropFilter4] = useState(false);

  const DropFilter4 = () => {
    setShowDropFilter4(!showDropFilter4);
  };

  const Btnclose = () => {
    setShowDropFilter4(false);
  };

  const CapacityMoreFiltersOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    // Implementar lógica de manejo de estilos para la superposición (overlay) en React Native
  }, [showDropFilter4]);

  return (
    <View>
      {/* Implementar lógica para la superposición (overlay) en React Native */}
      {showDropFilter4 && (
        <View style={styles.overlay} onTouchEnd={DropFilter4} />
      )}

      <TouchableOpacity style={styles.filter} onPress={DropFilter4}>
        <Text>More filters</Text>
      </TouchableOpacity>

      <View style={[styles.dropfilter4, showDropFilter4 ? styles.show : null]}>
        <View style={styles.filter4Header}>
          <TouchableOpacity style={styles.filter4Close} onPress={Btnclose}>
            {/* Agregar el ícono de cierre aquí */}
            {/* Puedes utilizar react-native-vector-icons para los íconos */}
          </TouchableOpacity>
          <View style={styles.filter4TitleHeader}>
            <Text style={styles.filter4TitleHeaderText}>More filters</Text>
          </View>
        </View>

        <ScrollView style={styles.container}>
          {/* ... Tu contenido filtrado ... */}
        </ScrollView>

        <View style={styles.filter4Footer}>
          <TouchableOpacity style={styles.btnClearFilter}>
            <Text>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnApplyFilter}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    paddingTop: 80,
    display: 'flex',
  },
  filter: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#111827',
    borderRadius: 20,
    cursor: 'pointer',
    marginLeft: 40,
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
  },
  dropFilter4: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    backgroundColor: '#ffffff',
    padding: 20,
    zIndex: 9999,
    width: 800,
    height: 600,
    borderRadius: 20,
    overflow: 'hidden',
  },
  overlay: {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    zIndex: 9998,
  },
  dropFilter4Show: {
    display: 'flex',
  },
  overlayShow: {
    display: 'block',
  },
  filter4Header: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    overflowY: 'scroll',
    overflowX: 'none',
    height: 430,
    width: 780,
  },
  filter4TitleHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: '#111827',
  },
  filter4Title: {
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    color: '#111827',
  },
  filter4ColumnContainer: {
    display: 'flex',
    marginRight: 10,
    marginLeft: 10,
  },
  filter4Column: {
    width: '100%',
  },
  filter4Footer: {
    width: '100%',
    display: 'flex',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  individualFilter: {
    width: '100%',
    cursor: 'pointer',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#111827',
  },
});

export default Filter4;
