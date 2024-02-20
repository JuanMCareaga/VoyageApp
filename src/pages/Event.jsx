import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Carrusel1 from "./Carrusel-imagenes-event/Carrusel1";

const Event = () => {
  const [showCapacityControls, setShowCapacityControls] = useState(false);
  const [inputValue4, setInputValue4] = useState("");
  const hotelInputRef = useRef(null);

  // Capacity carform
  const [capacityAdult2, setCapacityAdult2] = useState(0);
  const [capacityChildren2, setCapacityChildren2] = useState(0);
  const [capacityInfant2, setCapacityInfant2] = useState(0);

  const handleIncrementCapacity = (setter) => {
    setter((prevCapacity) =>
      prevCapacity < 10 ? prevCapacity + 1 : prevCapacity
    );
  };

  const handleDecrementCapacity = (setter) => {
    setter((prevCapacity) =>
      prevCapacity >= 1 ? prevCapacity - 1 : prevCapacity
    );
  };

  const handleCapacityFormClick = () => {
    setShowCapacityControls(!showCapacityControls);
  };

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setStartDate2(selectedDate);
      setEndDate2(selectedDate); // Set both start and end date for a single date selection
    }
    setCalendarVisible(false);
  };

  const formatDate = (date) => {
    if (date) {
      return date.toLocaleDateString(undefined, {
        month: "short",
        day: "2-digit",
      });
    }
    return "";
  };

  const isSelectedDate = (date) => {
    return (
      (startDate2 && startDate2.toDateString() === date.toDateString()) ||
      (endDate2 && endDate2.toDateString() === date.toDateString())
    );
  };

  const dayClassName = (date) => {
    return isSelectedDate(date) ? "selected-date" : "";
  };

  const [clase, setClase] = useState("precio-auto-calendario-fechas");

  const DateClick = () => {
    setClase((prevClase) =>
      prevClase === "precio-auto-calendario-fechas"
        ? "precio-auto-calendario-fechas-click"
        : "precio-auto-calendario-fechas"
    );
  };
};

const styles = StyleSheet.create({
  eventContainer: {
    width: '100%',
    height: '175vw', // Ajustar según sea necesario
  },
  searchEventPage: {
    position: 'absolute',
    marginTop: 90,
  },
  bodyEvent: {
    position: 'absolute',
    top: 900,
    width: '100%',
  },
  titleEvent: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '600',
    color: '#111827',
    paddingBottom: 20,
    paddingLeft: 20,
  },
  subtitleEvent: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#6b7280',
    paddingBottom: 70,
    paddingLeft: 20,
  },
  filtersContainer: {
    display: 'flex',
    marginLeft: -40,
    paddingLeft: 20,
  },
  filterEvent: {
    paddingRight: 20,
    border: '1px solid #111827',
    borderRadius: 20,
    cursor: 'pointer',
    marginLeft: 40,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    width: 'auto',
  },
  carruselContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  fila: {
    marginBottom: 100,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // Media Query para pantallas con max-width: 720px
  '@media (max-width: 720)': {
    filtersContainer: {
      display: 'grid',
      marginLeft: -40,
      paddingLeft: 20,
    },
    carruselContainer: {
      marginTop: 50,
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    fila: {
      display: 'grid',
    },
    filterEvent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  capacityContainerEvent: {
    position: 'absolute',
    zIndex: 7,
    backgroundColor: 'white',
    top: 710,
    left: 950,
    borderRadius: 10,
    width: 330,
    marginLeft: -90,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
});


export default Event;
