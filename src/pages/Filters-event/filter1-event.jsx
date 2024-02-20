import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-ionicons";


function Filter1Event() {
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
    <TouchableOpacity
      style={styles.filter}
      onPress={DropFilter}
      ref={filterRef}
    >
      <View style={styles.titleFilterContainer}>
        <Text style={styles.titleFilter}>Type of experiences</Text>
      </View>
      <View style={styles.arrowFilter}>
        <Icon name="chevron-down-outline" />
      </View>
      {showDropFilter1 && (
        <View style={styles.dropFilter1}>
          <TouchableOpacity onPress={CheckBoxOpen}>
            <View style={styles.checkboxContainer}>
              <CheckBox value={true} />
              <View style={styles.textCheckbox}>
                <Text style={styles.titleCheckboxContainer}>Food & drink</Text>
                <Text style={styles.subtitleCheckboxContainer}>
                  Short description for the experience
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
  );
}

const styles = StyleSheet.create({
  filters: {
    paddingTop: 80,
    display: 'flex',
  },
  '@media (max-width: 720px)': {
    filters: {
      paddingTop: 80,
      display: 'grid',
    },
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
    width: 'auto',
    zIndex: 2,
  },
  'filter2-event .filter': {
    position: 'relative',
  },
  arrowFilter: {
    marginTop: 6,
    marginLeft: 10,
  },
  dropFilter1: {
    display: 'none',
  },
  'filter2-event .dropFilter1.show': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 380,
    marginLeft: 300,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c8cbd1',
    borderRadius: 15,
    boxShadow: '0px 10px 6px 5px rgba(0, 0, 0, 0.1)',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 450,
    height: 60,
    margin: 5,
  },
  textCheckbox: {
    paddingTop: 18,
  },
  titleCheckboxContainer: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#111827',
  },
  subtitleCheckboxContainer: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 300,
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#6b7280',
    wordSpacing: 5,
  },
  buttonsFilter: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
  },
  btnClearFilter: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    lineHeight: 24,
    fontSize: 16,
    fontWeight: 500,
    color: '#374151',
    borderWidth: 1,
    borderColor: '#111827',
    borderRadius: 20,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  btnApplyFilter: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    lineHeight: 24,
    fontSize: 16,
    fontWeight: 500,
    color: '#f9fafb',
    border: 'none',
    borderRadius: 20,
    backgroundColor: '#0511f2',
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
  },
});

export default Filter1Event;
