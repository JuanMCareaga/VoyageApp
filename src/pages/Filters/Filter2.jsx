import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/Ionicons";

const Filter2 = () => {
  const [showDropFilter2, setShowDropFilter2] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const filterRef2 = useRef(null);

  const DropFilter2 = () => {
    setShowDropFilter2(!showDropFilter2);
  };

  const handleCheckboxClick2 = (e) => {
    e.stopPropagation();
  };

  const handleChange = (newValues) => {
    setPriceRange(newValues);
  };

  const RangePriceOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside2 = (event) => {
      if (filterRef2.current && !filterRef2.current.contains(event.target)) {
        setShowDropFilter2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside2);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, []);

  return (
    <View style={styles.filterContainer} onClick={DropFilter2} ref={filterRef2}>
      <Text style={styles.priceText}>
        ${priceRange[0]} - ${priceRange[1]}
      </Text>
      <View style={styles.arrowFilter}>
        <Icon name="chevron-down-outline" size={20} />
      </View>
      <View style={[styles.dropFilter2, showDropFilter2 ? styles.show : null]}>
        <ScrollView>
          <TouchableOpacity onPress={RangePriceOpen}>
            <Text style={styles.titleFilter2}>Price per day</Text>
            <View style={styles.barContainer} onClick={handleCheckboxClick2}>
              <Slider
                style={styles.barFilter}
                minimumValue={0}
                maximumValue={2000}
                step={1}
                value={priceRange}
                onValueChange={handleChange}
              />
            </View>
            <View style={styles.priceRange}>
              <View>
                <Text style={styles.priceWordFilter}>Min price</Text>
                <Text style={styles.priceNumberFilter}>${priceRange[0]}</Text>
              </View>
              <View>
                <Text style={styles.priceWordFilter}>Max price</Text>
                <Text style={styles.priceNumberFilter}>${priceRange[1]}</Text>
              </View>
            </View>
            <View style={styles.buttonsFilter}>
              <TouchableOpacity style={styles.btnClearFilter}>
                <Text style={styles.btnText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnApplyFilter}>
                <Text style={styles.btnText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
  priceText: {
    width: 160,
    borderWidth: 1,
    borderColor: "#848b99",
    borderRadius: 20,
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    zIndex: 2,
  },
  arrowFilter: {
    marginLeft: 10,
    marginTop: 6,
  },
  dropFilter2: {
    display: "none",
    position: "absolute",
    marginTop: 360,
    marginLeft: 360,
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
  titleFilter2: {
    padding: 20,
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    fontSize: 16,
    lineHeight: 24,
    color: "#111827",
    fontWeight: "500",
  },
  barContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 60,
    marginVertical: 5,
  },
  barFilter: {
    margin: 20,
  },
  priceRange: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  priceNumberFilter: {
    borderWidth: 1,
    borderRadius: 20,
    width: 100,
    paddingTop: 5,
    paddingRight: 50,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  priceWordFilter: {
    fontSize: 16,
    lineHeight: 20,
    color: "#374151",
    fontWeight: "500",
  },
  buttonsFilter: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
  },
  btnClearFilter: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  btnApplyFilter: {
    fontSize: 16,
    fontWeight: "500",
    color: "#f9fafb",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#0511f2",
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
});

export default Filter2;
