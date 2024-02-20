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


const styles = StyleSheet.create({
  contenedorForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1f2937',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  h1: {
    marginTop: 150,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: 'normal',
    fontSize: 48,
    lineHeight: 55,
    fontWeight: '600',
    color: '#111827',
  },
  p: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    marginTop: 600,
    width: '100%',
  },
  label: {
    marginLeft: 6,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 0,
    fontWeight: '500',
  },
  a: {
    textDecoration: 'none',
    color: '#1f2937',
    fontWeight: '500',
  },
  input: {
    height: 40,
    width: 420,
    margin: 3,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  formButton: {
    height: 50,
    width: 420,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    color: 'white',
    backgroundColor: 'rgba(51, 60, 135, 1)',
    cursor: 'pointer',
    fontWeight: '600',
  },
});
