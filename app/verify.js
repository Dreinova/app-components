import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import { router } from "expo-router";

const OTPVerification = () => {
  const theme = useColorScheme() ?? "light";
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30); // 30 segundos
  const [canResend, setCanResend] = useState(false);
  const inputs = useRef([]);

  // Iniciar el contador cuando se monta el componente
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true); // Habilita el botón cuando el contador llega a 0
    }
  }, [timer]);

  // Maneja el cambio de texto en los inputs
  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Mueve el foco automáticamente al siguiente campo si hay un número
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  // Verifica si todos los campos están llenos
  const isOtpComplete = otp.every((digit) => digit !== "");

  // Maneja el reenvío del código
  const handleResend = () => {
    setCanResend(false);
    setTimer(30); // Reinicia el contador a 30 segundos
    // Aquí puedes agregar la lógica para reenviar el código al usuario
    console.log("Código reenviado");
  };

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
      lightColor="#DEDFE1"
      darkColor="#232627"
    >
      <BackButton />
      <ThemedView
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          borderRadius: 27,
        }}
        lightColor="#FFF"
        darkColor="#141718"
      >
        <ThemedText type="subtitle" style={{ marginBottom: 8, fontSize: 22 }}>
          Verify Email
        </ThemedText>
        <ThemedText
          style={{ color: "#8F8F8F", marginBottom: 39, textAlign: "center" }}
        >
          We Have Sent Code To Your Phone Number
        </ThemedText>
        <ThemedText
          style={{
            fontWeight: "bold",
            marginBottom: 20,
            color: "#8F8F8F",
            textTransform: "uppercase",
          }}
        >
          Joseph---Mail.Com
        </ThemedText>

        {/* Cajas de entrada del código OTP */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 24 }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={{
                backgroundColor: theme == "light" ? "#FFFFFF" : "transparent",
                borderColor:
                  digit.length > 0
                    ? theme === "light"
                      ? "#141718"
                      : "#FFF"
                    : "#DADADA",
                borderRadius: 8,
                borderWidth: 2,
                color: theme == "light" ? "#141718" : "#FFF",
                fontSize: 28,
                height: 50,
                lineHeight: 32,
                textAlign: "center",
                width: 50,
              }}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        <Button
          text="Verify"
          style={{ width: "100%", marginBottom: 12, borderRadius: 14 }}
          onPress={() => router.push("reset-password")}
        />
        <Button
          text={canResend ? "Send Again" : `Resend in ${timer}s`}
          style={{
            borderRadius: 14,
            width: "100%",
            backgroundColor: canResend ? "#000" : "#EAEAEA",
          }}
          onPress={handleResend}
          disabled={!canResend}
          textStyle={{ color: canResend ? "white" : "#8F8F8F" }}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default OTPVerification;
