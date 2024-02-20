import React, { useState, useRef } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import auto1 from "../imagenescar/auto1.jpg";
import auto2 from "../imagenescar/auto2.jpg";
import auto3 from "../imagenescar/auto3.jpg";
import auto4 from "../imagenescar/auto4.jpg";
import silueta from "../imagenes/silueta.jpg";

import "react-native-datepicker/dist/react-native-datepicker.css";

const PageCar = () => {
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const carInputRef1 = useRef(null);
  const carInputRef2 = useRef(null);

  // Resto del código...

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Resto del código... */}
    </View>
  );
};

export default PageCar;
