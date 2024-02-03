import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

export const Register = () => {
  const navigation = useNavigation();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const onRegister = () => {
    // Lógica de registro aquí
    // Puedes usar el hook de estado para manejar los valores del formulario
  };

  return (
    <Container>
      <Form>
        <Title>Register</Title>

        <InputContainer>
          <InputLabel>Email address:</InputLabel>
          <TextInput
            placeholder="example@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => onInputChange("email", text)}
            style={styles.input}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Password:</InputLabel>
          <TextInput
            placeholder="********"
            secureTextEntry
            value={password}
            onChangeText={(text) => onInputChange("password", text)}
            style={styles.input}
          />
        </InputContainer>

        <TouchableOpacity onPress={onRegister}>
          <RegisterButton>Register</RegisterButton>
        </TouchableOpacity>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Form = styled.View`
  width: 80%;
`;

const Title = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #111827;
`;

const InputContainer = styled.View`
  margin-top: 20px;
`;

const InputLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1f2937;
`;

const RegisterButton = styled.Text`
  height: 50px;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  color: white;
  background-color: rgba(51, 60, 135, 1);
  text-align: center;
  line-height: 30px;
  font-weight: 600;
`;

const styles = {
  input: {
    height: 40,
    width: "100%",
    marginVertical: 5,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
};
