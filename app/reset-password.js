import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import BackButton from "../components/ui/BackButton";
import Button from "../components/ui/Button";
import CustomInput from "../components/ui/Inputs";
import AntDesign from "@expo/vector-icons/AntDesign";

const ResetPassword = ({}) => {
  const [password, setpassword] = useState("");
  const [repeat, setRepeat] = useState("");
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <BackButton />

      <ThemedText
        type="title"
        style={{ marginBottom: 47, marginTop: 73, width: 200, lineHeight: 45 }}
      >
        Reset Your Password
      </ThemedText>
      <CustomInput
        placeholder="Enter Your Password"
        icon={() => <AntDesign name="lock1" size={24} color="#C2C3CB" />}
        secureTextEntry
        value={password}
        onChangeText={setpassword}
        style={{
          marginBottom: 20,
        }}
      />
      <CustomInput
        placeholder="Repeat Your Password"
        icon={() => <AntDesign name="lock1" size={24} color="#C2C3CB" />}
        secureTextEntry
        value={repeat}
        onChangeText={setRepeat}
        style={{
          marginBottom: 20,
        }}
      />
      <Button
        text="Reset"
        style={{ width: "100%", marginBottom: 12, borderRadius: 14 }}
        onPress={() => router.push("reset-password")}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default ResetPassword;
