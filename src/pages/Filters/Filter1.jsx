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
  },
  titleFilter: {},
  arrowFilter: {
    marginTop: 6,
    marginLeft: 10,
  },
  dropFilter1: {
    display: 'none',
  },
  dropFilter1Show: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 440,
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
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#111827',
  },
  subtitleCheckboxContainer: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '300',
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
    fontWeight: '500',
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
    fontWeight: '500',
    color: '#f9fafb',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#0511f2',
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
  },
});


export default Filter1;
