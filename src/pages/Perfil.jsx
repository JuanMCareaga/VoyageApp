import React from "react";
import { View, Image } from "react-native";
import voyage from "../imagenes/voyage-united.png";

const Perfil = () => {
  return (
    <View>
      <Image source={voyage} style={{ width: 200, height: 200 }} />
      {/* Resto de tu contenido */}
    </View>
  );
};

export default Perfil;
