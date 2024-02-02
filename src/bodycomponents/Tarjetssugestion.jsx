import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Suggestion1 from "./Tarjetssuggestiondestin/Suggestion1";
import Suggestion2 from "./Tarjetssuggestiondestin/Suggestion2";
import Suggestion3 from "./Tarjetssuggestiondestin/Suggestion3";
import Suggestion4 from "./Tarjetssuggestiondestin/Suggestion4";

function Tarjetsuggestiondestins() {
  return (
    <View style={styles.tarjetstopdestinscontainer}>
      <Text style={styles.title}>Suggestions for discovery</Text>
      <Text style={styles.subtitle}>
        Popular places to stay that Chisfis recommends for you
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.suggestcontainer}>
          <Suggestion1 />
          <Suggestion2 />
          <Suggestion3 />
          <Suggestion4 />
        </View>
      </ScrollView>
    </View>
  );
}

export default Tarjetsuggestiondestins;

const styles = StyleSheet.create({
  tarjetstopdestinscontainer: {
    paddingTop: 100,
    paddingBottom: 200,
    backgroundColor: "#F2E6D8",
    borderRadius: 30,
    marginBottom: 150,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontFamily:
      "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontWeight: "600",
    lineHeight: 40,
    fontSize: 36,
    color: "#111827",
    fontStyle: "normal",
    textAlign: "center",
  },
  subtitle: {
    fontFamily:
      "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontWeight: "400",
    lineHeight: 28,
    fontSize: 20,
    color: "#6b7280",
    fontStyle: "normal",
    textAlign: "center",
    paddingVertical: 20,
  },
  suggestcontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
