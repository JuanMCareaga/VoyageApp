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



const styles = StyleSheet.create({
  HIBody: {
    height: '190%',
    width: '100%',
  },
  HIImgContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 100,
    width: '100%',
  },
  HIColumnaImg: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 10,
  },
  imgHotelIndividual1: {
    borderRadius: 10,
    width: 600,
    height: 500,
    // Estilos adicionales según sea necesario
  },
  imgHotelIndividual2: {
    borderRadius: 10,
    width: 300,
    height: 245,
    marginBottom: 10,
    // Estilos adicionales según sea necesario
  },
  precioHotel: {
    border: '1px solid #ccc',
    borderRadius: 10,
    position: 'sticky',
    top: 100,
    // Estilos adicionales según sea necesario
  },
  caracteristicasHotel: {
    marginTop: 50,
    padding: 20,
    width: '55%',
    border: '1px solid #ccc',
    borderRadius: 10,
    // Estilos adicionales según sea necesario
  },
  itemList: {
    paddingLeft: 10,
    // Estilos adicionales según sea necesario
  },
  listaRoomRates: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(173, 216, 230, 0.2)',
    borderRadius: 5,
    // Estilos adicionales según sea necesario
  },
  listaRoomRates2: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Estilos adicionales según sea necesario
  },
  textoLista: {
    padding: 15,
    fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 16,
    color: '#4b5563',
  },
  capacityformHIClick: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    border: '1px solid #ccc',
    cursor: 'pointer',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    // Estilos adicionales según sea necesario
  },
  capacityformHI: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    border: '1px solid #ccc',
    cursor: 'pointer',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    // Estilos adicionales según sea necesario
  },
  sumaCapacity: {
    width: 30,
    fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSize: 18,
    lineHeight: 28,
    color: '#111827',
    fontWeight: '600',
    fontStyle: 'normal',
  },
  capacityContainerHotel: {
    borderRadius: 30,
    marginTop: 20,
    border: '1px solid #ccc',
    position: 'absolute',
    backgroundColor: '#Fff',
    zIndex: 10,
    left: 30,
    // Estilos adicionales según sea necesario
  },
  capacityControlsHotel: {
    display: 'none',
    // Estilos adicionales según sea necesario
  },
  capacityControlsHotelShow: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 10,
    // Estilos adicionales según sea necesario
  },
  inputCapacity: {
    display: 'flex',
    alignItems: 'center',
    // Estilos adicionales según sea necesario
  },
  sumaCapacity: {
    marginLeft: 5,
    // Estilos adicionales según sea necesario
  },
  icon: {
    color: '#ccc',
    // Estilos adicionales según sea necesario
  },
});

export default Infohotel;
