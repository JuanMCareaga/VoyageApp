import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-ionicons";
import styles from "./Filter2EventStyles"; // Asegúrate de tener un archivo de estilos separado

function Filter2Event() {
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
    <View style={styles.filter2Event}>
      <TouchableOpacity
        style={styles.filter}
        onPress={DropFilter}
        ref={filterRef}
      >
        <Text style={styles.filterTitle}>Tyme of day</Text>
        <View style={styles.arrowFilter}>
          <Icon name="chevron-down-outline" />
        </View>
        {showDropFilter1 && (
          <View style={styles.dropFilter1}>
            <TouchableOpacity onPress={CheckBoxOpen}>
              <View style={styles.checkboxContainer}>
                <CheckBox value={true} />
                <View style={styles.textCheckbox}>
                  <Text style={styles.titleCheckboxContainer}>
                    Entire place
                  </Text>
                  <Text style={styles.subtitleCheckboxContainer}>
                    Have a place to yourself
                  </Text>
                </View>
              </View>

              {/* Repite este bloque para cada opción del checkbox */}
            </TouchableOpacity>

            <View style={styles.buttonsFilter}>
              <TouchableOpacity style={styles.btnClearFilter}>
                <Text>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnApplyFilter}>
                <Text>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Filter2Event;
