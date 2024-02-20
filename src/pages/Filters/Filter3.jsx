import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Filter3 = () => {
  const [showDropFilter3, setShowDropFilter3] = useState(false);
  const filterRef3 = useRef(null);

  const DropFilter3 = () => {
    setShowDropFilter3(!showDropFilter3);
  };

  useEffect(() => {
    const handleClickOutside3 = (event) => {
      if (filterRef3.current && !filterRef3.current.contains(event.target)) {
        setShowDropFilter3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside3);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside3);
    };
  }, []);

  const [capacityBeds, setCapacityBeds] = useState(0);

  const handleIncrementCapacityBeds = () => {
    if (capacityBeds < 10) {
      setCapacityBeds((prevCapacityBeds) => prevCapacityBeds + 1);
    }
  };

  const handleDecrementCapacityBeds = () => {
    if (capacityBeds >= 1) {
      setCapacityBeds((prevCapacityBeds) => prevCapacityBeds - 1);
    }
  };

  const [capacityBedrooms, setCapacityBedrooms] = useState(0);

  const handleIncrementCapacityBedrooms = () => {
    if (capacityBedrooms < 10) {
      setCapacityBedrooms((prevCapacityBedrooms) => prevCapacityBedrooms + 1);
    }
  };

  const handleDecrementCapacityBedrooms = () => {
    if (capacityBedrooms >= 1) {
      setCapacityBedrooms((prevCapacityBedrooms) => prevCapacityBedrooms - 1);
    }
  };

  const [capacityBathrooms, setCapacityBathrooms] = useState(0);

  const handleIncrementCapacityBathrooms = () => {
    if (capacityBathrooms < 10) {
      setCapacityBathrooms(
        (prevCapacityBathrooms) => prevCapacityBathrooms + 1
      );
    }
  };

  const handleDecrementCapacityBathrooms = () => {
    if (capacityBathrooms >= 1) {
      setCapacityBathrooms(
        (prevCapacityBathrooms) => prevCapacityBathrooms - 1
      );
    }
  };

  const CapacityRoomOpen = (e) => {
    e.stopPropagation();
  };

  return (
    <View style={styles.filterContainer} onClick={DropFilter3} ref={filterRef3}>
      <Text style={styles.filterText}>Rooms of Beds</Text>
      <View style={styles.arrowFilter}>
        <Icon name="chevron-down-outline" size={20} />
      </View>
      <View style={[styles.dropFilter3, showDropFilter3 ? styles.show : null]}>
        <ScrollView>
          <TouchableOpacity onPress={CapacityRoomOpen}>
            <View style={styles.filterBeds}>
              <Text style={styles.filter3Text}>Beds</Text>
              <View style={styles.filterBtns}>
                <TouchableOpacity
                  style={styles.filter3Button}
                  onPress={handleDecrementCapacityBeds}
                >
                  <Icon name="remove-circle" size={25} color="#5c6d91" />
                </TouchableOpacity>
                <Text style={styles.inputCapacity}>{capacityBeds}</Text>
                <TouchableOpacity
                  style={styles.filter3Button}
                  onPress={handleIncrementCapacityBeds}
                >
                  <Icon name="add-circle" size={25} color="#5c6d91" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.filterBeds}>
              <Text style={styles.filter3Text}>Bedrooms</Text>
              <View style={styles.filterBtns}>
                <TouchableOpacity
                  style={styles.filter3Button}
                  onPress={handleDecrementCapacityBedrooms}
                >
                  <Icon name="remove-circle" size={25} color="#5c6d91" />
                </TouchableOpacity>
                <Text style={styles.inputCapacity}>{capacityBedrooms}</Text>
                <TouchableOpacity
                  style={styles.filter3Button}
                  onPress={handleIncrementCapacityBedrooms}
                >
                  <Icon name="add-circle" size={25} color="#5c6d91" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.filterBeds}>
              <Text style={styles.filter3Text}>Bathrooms</Text>
              <View style={styles.filterBtns}>
                <TouchableOpacity
                  style={styles.filter3Button}
                  onPress={handleDecrementCapacityBathrooms}
                >
                  <Icon name="remove-circle" size={25} color="#5c6d91" />
                </TouchableOpacity>
                <Text style={styles.inputCapacity}>{capacityBathrooms}</Text>
                <TouchableOpacity
                  style={styles.filter3Button}
                  onPress={handleIncrementCapacityBathrooms}
                >
                  <Icon name="add-circle" size={25} color="#5c6d91" />
                </TouchableOpacity>
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
  arrowFilter: {
    marginTop: 6,
    marginLeft: 10,
  },
  dropFilter3: {
    display: 'none',
  },
  dropFilter3Show: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 220,
    left: 440,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c8cbd1',
    borderRadius: 15,
  },
  filterBeds: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 400,
    margin: 20,
  },
  filter3Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#1f2937',
    fontStyle: 'normal',
  },
  filterBtns: {
    display: 'flex',
    justifyContent: 'center',
  },
  filter3Button: {
    color: '#5c6d91',
  },
});

export default Filter3;
