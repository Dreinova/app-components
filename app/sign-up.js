import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomInput from "../components/ui/Inputs";
import { router } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
const SignUp = ({}) => {
  const [fullName, setFullName] = useState(""); // Estado para el input
  const [email, setEmail] = useState(""); // Estado para el input
  const [password, setPassword] = useState(""); // Estado para el input

  const handleRegister = () => {
    console.log("Password:", password); // Aquí puedes enviar la contraseña a tu API
  };
  return (
    <ScrollView>
      <ThemedView
        style={{
          flex: 1,

          paddingVertical: 25,
        }}
      >
        <View style={{ paddingHorizontal: 35 }}>
          <BackButton />
          <ThemedText
            lightColor="#141718"
            darkColor="#FFFFFF"
            type="title"
            style={{ marginBottom: 33, width: 200, lineHeight: 50 }}
          >
            Create your Account
          </ThemedText>
          <CustomInput
            placeholder="Full Name"
            icon={() => <Octicons name="person" size={24} color="#C2C3CB" />}
            value={fullName}
            onChangeText={setFullName}
            style={{
              marginBottom: 20,
            }}
          />
          <CustomInput
            placeholder="Enter Your Email"
            icon={() => <Fontisto name="email" size={24} color="#C2C3CB" />}
            value={email}
            onChangeText={setEmail}
            style={{
              marginBottom: 20,
            }}
          />

          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Your Password"
            icon={() => <AntDesign name="lock1" size={24} color="#C2C3CB" />}
            secureTextEntry
          />
          <View style={{ alignItems: "flex-end", marginBottom: 24 }}>
            <Button
              text="Forgot Password?"
              type="tertiary"
              onPress={() => router.push("forget-password")}
              style={{
                width: "50%",
                opacity: 0.7,
              }}
            />
          </View>
          <Button
            onPress={handleRegister}
            text="Register"
            type="primary"
            style={{
              backgroundColor: "#232627",
              paddingVertical: 20,
              borderRadius: 12,
              marginBottom: 22,
            }}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <ThemedText>Already Have An Account? </ThemedText>

            <Button
              text="Sign In"
              type="tertiary"
              style={{ width: 80 }}
              onPress={() => router.push("sign-in")}
            />
          </View>
        </View>
        <View
          style={{
            borderTopColor: "#C2C3CB",
            borderTopWidth: 1,
            paddingTop: 25,
          }}
        >
          <ThemedText style={{ textAlign: "center", marginBottom: 20 }}>
            Continue With Accounts
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              paddingHorizontal: 35,
            }}
          >
            <Button
              text="Google"
              textStyle={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "rgba(212,70,56,1)",
              }}
              style={{
                width: "48%",
                backgroundColor: "rgba(212,70,56,.25)",
                borderRadius: 10,
              }}
              onPress={() => console.log("Google Login")}
            />

            <Button
              text="Facebook"
              textStyle={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "rgba(66,103,178,1)",
              }}
              style={{
                width: "48%",
                backgroundColor: "rgba(66,103,178,.25)",
                borderRadius: 10,
              }}
              onPress={() => console.log("Facebook Login")}
            />
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
