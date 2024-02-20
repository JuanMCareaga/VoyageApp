import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import voyage from "../imagenes/silueta.jpg";
import edit from "../imagenes/camara.png";
import { styles } from "./perfilStyles"; // Define your styles in a separate file

const Perfil = () => {
  return (
    <>
      <View style={styles.seccionPerfilUsuario}>
        <View style={styles.perfilUsuarioHeader}>
          <View style={styles.perfilUsuarioPortada}>
            <View style={styles.perfilUsuarioAvatar}>
              <Image source={voyage} style={styles.avatar} />
              <TouchableOpacity style={styles.botonAvatar}>
                <Image source={edit} style={styles.pencil} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.perfilUsuarioBody}>
          <View style={styles.perfilUsuarioBio}>
            <Text style={styles.titulo}>User 2024</Text>
            <Text style={styles.texto}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.perfilUsuarioFooter}>
            {/* First set of user data */}
            <View style={styles.listaDatos}>
              <Text>
                <Icon name="map-signs" size={18} color="#333" />
                Adress:
              </Text>
              {/* Add other data points similarly */}
            </View>
            {/* Second set of user data */}
            <View style={styles.listaDatos}>
              <Text>
                <Icon name="map-marker-alt" size={18} color="#333" />
                Location:
              </Text>
              {/* Add other data points similarly */}
            </View>
            <TouchableOpacity style={styles.botonPortada}>
              <Text>
                <Icon name="image" size={18} color="#fff" />
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.perfilUsuarioFooter}>
            <Text style={styles.titulo}>Booking History</Text>
            {/* Add booking history data similarly */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Perfil;
