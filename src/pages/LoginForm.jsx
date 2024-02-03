import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Contenedorform = styled.View`
  /* Estilos para tu contenedor */
`;

const LoginForm = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = () => {
    // Lógica de autenticación

    // Navegar a la pantalla de dashboard
    navigation.replace("Dashboard");
  };

  return (
    <Contenedorform>
      <View>
        <Text>Login</Text>

        <View>
          <Text>Email address:</Text>
          <TextInput
            placeholder="example@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />
        </View>

        <View>
          <Text>
            Password:
            <Text onPress={() => navigation.navigate("ForgotPassword")}>
              Forgot Password?
            </Text>
          </Text>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            required
          />
        </View>

        <TouchableOpacity onPress={onLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <Text>
          New user?{" "}
          <Text onPress={() => navigation.navigate("Register")}>
            Create an account
          </Text>
        </Text>
      </View>
    </Contenedorform>
  );
};

export default LoginForm;
