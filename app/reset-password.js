import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import BackButton from "../components/ui/BackButton";
import Button from "../components/ui/Button";
import CustomInput from "../components/ui/Inputs";
import AntDesign from "@expo/vector-icons/AntDesign";

const ResetPassword = ({}) => {
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [errors, setErrors] = useState({ password: "", repeat: "" });

  const validatePassword = () => {
    let valid = true;
    let newErrors = { password: "", repeat: "" };

    if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
      valid = false;
    }

    if (!/[A-Z]/.test(password)) {
      newErrors.password = "Debe incluir al menos una letra mayúscula.";
      valid = false;
    }

    if (!/[a-z]/.test(password)) {
      newErrors.password = "Debe incluir al menos una letra minúscula.";
      valid = false;
    }

    if (!/[0-9]/.test(password)) {
      newErrors.password = "Debe incluir al menos un número.";
      valid = false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>_]/.test(password)) {
      newErrors.password = "Debe incluir al menos un carácter especial.";
      valid = false;
    }

    if (repeat !== password) {
      newErrors.repeat = "Las contraseñas no coinciden.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleReset = () => {
    if (validatePassword()) {
      console.log("Contraseña válida, proceder con el reset.");
      // Aquí puedes agregar la lógica para enviar la nueva contraseña al backend
    }
  };

  return (
    <ThemedView style={styles.container}>
      <BackButton />
      <ThemedText type="title" style={styles.title}>
        Reset Your Password
      </ThemedText>

      <CustomInput
        placeholder="Enter Your Password"
        icon={() => <AntDesign name="lock1" size={24} color="#C2C3CB" />}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}

      <CustomInput
        placeholder="Repeat Your Password"
        icon={() => <AntDesign name="lock1" size={24} color="#C2C3CB" />}
        secureTextEntry
        value={repeat}
        onChangeText={setRepeat}
        style={styles.input}
      />
      {errors.repeat ? (
        <Text style={styles.errorText}>{errors.repeat}</Text>
      ) : null}

      <Button text="Reset" style={styles.button} onPress={handleReset} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 47,
    marginTop: 73,
    width: 200,
    lineHeight: 45,
  },
  input: {
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginBottom: 12,
    borderRadius: 14,
  },
});

export default ResetPassword;
