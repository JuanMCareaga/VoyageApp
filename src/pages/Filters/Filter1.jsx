import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/Ionicons";

const Filter1 = () => {
  const [showDropFilter1, setShowDropFilter1] = useState(false);
  const filterRef = useRef(null);

  const DropFilter = () => {
    setShowDropFilter1(!showDropFilter1);
  };

  const CheckBoxOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowDropFilter1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <View style={styles.filterContainer} ref={filterRef}>
      <TouchableOpacity style={styles.filter} onPress={DropFilter}>
        <Text style={styles.titleFilter}>Type of place</Text>
        <View style={styles.arrowFilter}>
          <Icon name="chevron-down-outline" size={20} />
        </View>
      </TouchableOpacity>
      <View style={[styles.dropFilter1, showDropFilter1 ? styles.show : null]}>
        <ScrollView>
          <TouchableOpacity onPress={CheckBoxOpen}>
            <View style={styles.checkboxContainer}>
              <CheckBox tintColors={{ true: "#0511f2" }} />
              <View style={styles.textCheckbox}>
                <Text style={styles.titleCheckboxContainer}>Entire place</Text>
                <Text style={styles.subtitleCheckboxContainer}>
                  Have a place to yourself
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Repite la estructura para otros elementos del checkbox */}

          <View style={styles.buttonsFilter}>
            <TouchableOpacity style={styles.btnClearFilter}>
              <Text style={styles.btnText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnApplyFilter}>
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 80,
    flexDirection: "row",
  },
  filter: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#111827",
    borderRadius: 20,
    marginLeft: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  titleFilter: {
    // Añade estilos según tus necesidades
  },
  arrowFilter: {
    marginLeft: 10,
    marginTop: 6,
  },
  dropFilter1: {
    display: "none",
    position: "absolute",
    marginTop: 440,
    marginLeft: 300,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#c8cbd1",
    borderRadius: 15,
    elevation: 5,
    padding: 10,
  },
  show: {
    display: "flex",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 450,
    height: 60,
    marginVertical: 5,
  },
  textCheckbox: {
    paddingTop: 18,
  },
  titleCheckboxContainer: {
    // Añade estilos según tus necesidades
  },
  subtitleCheckboxContainer: {
    // Añade estilos según tus necesidades
  },
  buttonsFilter: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
  },
  btnClearFilter: {
    // Añade estilos según tus necesidades
  },
  btnApplyFilter: {
    // Añade estilos según tus necesidades
  },
  btnText: {
    // Añade estilos según tus necesidades
  },
});

export default Filter1;
