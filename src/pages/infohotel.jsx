import React from "react";
import { ScrollView, View, Text } from "react-native";
import Map from "./Map";
import Tarjethotelsearch from "./Tarjetshotelsearcher/Tarjethotelsearch";
import Tarjethotelsearch2 from "./Tarjetshotelsearcher/Tarjethotelsearch2";
import Tarjetshotelsearch3 from "./Tarjetshotelsearcher/Tarjetshotelsearch3";
import Tarjetshotelsearch4 from "./Tarjetshotelsearcher/Tarjetshotelsearch4";
import Tarjetshotelsearch5 from "./Tarjetshotelsearcher/Tarjetshotelsearch5";
import Tarjetshotelsearch6 from "./Tarjetshotelsearcher/Tarjetshotelsearch6";
import Filter1 from "./Filters/Filter1";
import Filter2 from "./Filters/Filter2";
import Filter3 from "./Filters/Filter3";
import Filter4 from "./Filters/Filter4";

const Infohotel = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View>
          <Map />
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 16 }}>
          Stays in Tokyo
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          233 stays · Aug 12 - 18 · 2 Guests
        </Text>

        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <Filter1 />
          <Filter2 />
          <Filter3 />
          <Filter4 />
        </View>

        <Tarjethotelsearch />
        <Tarjethotelsearch2 />
        <Tarjetshotelsearch3 />
        <Tarjetshotelsearch4 />
        <Tarjetshotelsearch5 />
        <Tarjetshotelsearch6 />
      </View>
    </ScrollView>
  );
};

export default Infohotel;
