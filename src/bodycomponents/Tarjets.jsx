import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Carrousel1 from "./Tarjetshotel1/Tarjet1";
import Carrousel2 from "./Tarjetshotel1/Tarjet2";
import Carrousel3 from "./Tarjetshotel1/Tarjet3";
import Carrousel4 from "./Tarjetshotel1/Tarjet4";
import Carrousel5 from "./Tarjetshotel1/Tarjet5";
import Carrousel6 from "./Tarjetshotel1/Tarjet6";
import Carrousel7 from "./Tarjetshotel1/Tarjet7";
import Carrousel8 from "./Tarjetshotel1/Tarjet8";
import Tarjet2carrousel1 from "./Tarjetshotel2/Tarjet2.1";
import Tarjet2carrousel2 from "./Tarjetshotel2/Tarjet2.2";
import Tarjet2carrousel3 from "./Tarjetshotel2/Tarjet2.3";
import Tarjet2carrousel4 from "./Tarjetshotel2/Tarjet2.4";
import Tarjet2carrousel5 from "./Tarjetshotel2/Tarjet2.5";
import Tarjet2carrousel6 from "./Tarjetshotel2/Tarjet2.6";
import Tarjet2carrousel7 from "./Tarjetshotel2/Tarjet2.7";
import Tarjet2carrousel8 from "./Tarjetshotel2/Tarjet2.8";
import Tarjet3carrousel1 from "./Tarjetshotel3/Tarjet3.1";
import Tarjet3carrousel2 from "./Tarjetshotel3/Tarjet3.2";
import Tarjet3carrousel3 from "./Tarjetshotel3/Tarjet3.3";
import Tarjet3carrousel4 from "./Tarjetshotel3/Tarjet3.4";
import Tarjet3carrousel5 from "./Tarjetshotel3/Tarjet3.5";
import Tarjet3carrousel6 from "./Tarjetshotel3/Tarjet3.6";
import Tarjet3carrousel7 from "./Tarjetshotel3/Tarjet3.7";
import Tarjet3carrousel8 from "./Tarjetshotel3/Tarjet3.8";

function Tarjets() {
  const [selectedSearchTarjets, setSelectedSearchTarjets] =
    useState("firstUbication");

  const [firstUbicationClicked, setFirstUbicationClicked] = useState(false);
  const [secondUbicationClicked, setSecondUbicationClicked] = useState(false);
  const [thirdUbicationClicked, setThirdUbicationClicked] = useState(false);

  const handleFirstUbicationClick = () => {
    setFirstUbicationClicked(true);
    setSecondUbicationClicked(false);
    setThirdUbicationClicked(false);
    setSelectedSearchTarjets("firstUbication");
  };

  const handleSecondUbicationClick = () => {
    setSecondUbicationClicked(true);
    setFirstUbicationClicked(false);
    setThirdUbicationClicked(false);
    setSelectedSearchTarjets("secondUbication");
  };

  const handleThirdUbicationClick = () => {
    setThirdUbicationClicked(true);
    setFirstUbicationClicked(false);
    setSecondUbicationClicked(false);
    setSelectedSearchTarjets("thirdUbication");
  };

  const renderTarjetsComponents = () => {
    if (selectedSearchTarjets === "firstUbication") {
      return (
        <ScrollView>
          <View style={styles.container1}>
            <Carrousel1 />
            <Carrousel2 />
            <Carrousel3 />
            <Carrousel4 />
          </View>
          <View style={styles.container2}>
            <Carrousel5 />
            <Carrousel6 />
            <Carrousel7 />
            <Carrousel8 />
          </View>
        </ScrollView>
      );
    } else if (selectedSearchTarjets === "secondUbication") {
      return (
        <ScrollView>
          <View style={styles.container1}>
            <Tarjet2carrousel1 />
            <Tarjet2carrousel2 />
            <Tarjet2carrousel3 />
            <Tarjet2carrousel4 />
          </View>
          <View style={styles.container2}>
            <Tarjet2carrousel5 />
            <Tarjet2carrousel6 />
            <Tarjet2carrousel7 />
            <Tarjet2carrousel8 />
          </View>
        </ScrollView>
      );
    } else if (selectedSearchTarjets === "thirdUbication") {
      return (
        <ScrollView>
          <View style={styles.container1}>
            <Tarjet3carrousel1 />
            <Tarjet3carrousel2 />
            <Tarjet3carrousel3 />
            <Tarjet3carrousel4 />
          </View>
          <View style={styles.container2}>
            <Tarjet3carrousel5 />
            <Tarjet3carrousel6 />
            <Tarjet3carrousel7 />
            <Tarjet3carrousel8 />
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.betsellerContainer}>
      <View style={styles.textTarjet}>
        <Text>
          <Text style={styles.headingText}>Betsellers Listing</Text>
          {"\n"}Hotel highly rated for thoughtful design
        </Text>
      </View>
      <View style={styles.searchTarjetContainer}>
        <View style={styles.buttonTarjetContainer}>
          <TouchableOpacity
            onPress={handleFirstUbicationClick}
            style={[
              styles.btnsTarjetsSearchs,
              firstUbicationClicked ? styles.clicked : null,
            ]}
          >
            <Text>New York</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSecondUbicationClick}
            style={[
              styles.btnsTarjetsSearchs,
              secondUbicationClicked ? styles.clicked : null,
            ]}
          >
            <Text>Dubai</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleThirdUbicationClick}
            style={[
              styles.btnsTarjetsSearchs,
              thirdUbicationClicked ? styles.clicked : null,
            ]}
          >
            <Text>Italia</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderTarjetsComponents()}
    </View>
  );
}

export default Tarjets;

const styles = StyleSheet.create({
  betsellerContainer: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    alignItems: "center",
  },
  textTarjet: {
    marginLeft: 40,
  },
  searchTarjetContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "static",
  },
  buttonTarjetContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnsTarjetsSearchs: {
    fontFamily:
      "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: "#374151",
    border: "none",
    marginLeft: 35,
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    width: 90,
  },
  clicked: {
    borderRadius: 20,
    color: "#f9fafb",
    backgroundColor: "#0511f2",
    width: 90,
    height: 40,
  },
  container1: {
    flexDirection: "row",
  },
  container2: {
    flexDirection: "row",
    marginBottom: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
