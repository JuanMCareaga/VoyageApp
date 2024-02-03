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

export default Event;
