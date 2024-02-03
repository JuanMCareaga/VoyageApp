import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import voyage from "../imagenes/voyage-united.png";
import Hotel from "./Hotel";
import Space from "./Space";
import Tour from "./Tour";
import Car from "./Car";
import Event from "./Event";
import MenuMobile from "../imagenes/menu.png";

export const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onLogout = () => {
    navigation.navigate("LoginForm");
  };

  return (
    <>
      <View style={styles.navcontainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Home", { logged: route.params?.logged })
            }
          >
            <Image source={voyage} style={styles.imgvoyage} />
          </TouchableOpacity>
          <View style={styles.navComponents}>
            <Hotel />
            <Space />
            <Tour />
            <Car />
            <Event />
          </View>
          <TouchableOpacity onPress={handleToggleMenu}>
            <Image
              source={MenuMobile}
              style={[styles.imgMenu, menuOpen && styles.active]}
            />
          </TouchableOpacity>
          {menuOpen && (
            <TouchableOpacity
              style={styles.inactive}
              onPress={handleToggleMenu}
            >
              <Text style={styles.equis}>X</Text>
            </TouchableOpacity>
          )}
        </View>

        {route.params?.logged ? (
          <View>
            <TouchableOpacity
              style={styles.buttonMenu}
              onPress={handleToggleMenu}
            >
              <Text>Menu</Text>
              {menuOpen && (
                <View style={styles.menu}>
                  <TouchableOpacity
                    style={styles.itemsMenu}
                    onPress={() =>
                      navigation.navigate("Perfil", {
                        logged: route.params?.logged,
                      })
                    }
                  >
                    <Text>Perfil</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.itemsMenu}
                    onPress={() =>
                      navigation.navigate("Configuracion", {
                        logged: route.params?.logged,
                      })
                    }
                  >
                    <Text>Configuración</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.itemsMenu} onPress={() => {}}>
                    <Text>Booking History</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.itemsMenu} onPress={() => {}}>
                    <Text>Change password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.itemsMenu} onPress={onLogout}>
                    <Text>Log Out</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
              <Text style={styles.navbutton}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navcontainer: {
    flexDirection: "column",
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    zIndex: 200,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navComponents: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 130,
  },
  imgMenu: {
    height: 30,
    display: "none",
  },
  active: {
    display: "block",
  },
  inactive: {
    display: "none",
  },
  equis: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 170,
    marginTop: 20,
  },
  imgvoyage: {
    height: 80,
    marginLeft: 50,
    marginTop: 5,
    borderRadius: 15,
  },
  navbutton: {
    fontFamily: "Poppins",
    fontSize: 15,
    lineHeight: 20,
    textDecorationLine: "none",
    padding: 17,
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 50,
    marginTop: 20,
    width: 110,
    fontWeight: "500",
    color: "#f9fafb",
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#efb810",
    cursor: "pointer",
    textAlign: "center",
    overflow: "hidden",
    hover: {
      backgroundColor: "#efb810",
    },
  },
  buttonMenu: {
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    lineHeight: 10,
    borderRadius: 30,
    marginRight: 10,
    width: 110,
    fontWeight: "500",
    color: "#f9fafb",
    padding: 17,
    borderWidth: 1,
    borderColor: "#efb810",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: "#efb810",
  },
  menu: {
    position: "absolute",
    top: 70,
    right: 5,
    backgroundColor: "#ffff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
    minWidth: 150,
    zIndex: 1,
    color: "black",
  },
  itemsMenu: {
    justifyContent: "center",
    fontFamily: "Poppins",
    fontSize: 18,
    lineHeight: 14,
    padding: 20,
    fontWeight: "500",
    cursor: "pointer",
    color: "#111827",
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    hover: {
      backgroundColor: "#f0f0f0",
    },
  },
});
