import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { router } from "expo-router";
const BackButton = ({ style }) => {
  const theme = useColorScheme() ?? "light";
  return (
    <TouchableOpacity
      style={[
        {
          marginBottom: 32,
          backgroundColor: theme == "light" ? "#FFF" : "#232627",
          width: 45,
          borderRadius: 16,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
        style,
      ]}
      onPress={() => router.back()}
    >
      <Ionicons
        name="chevron-back"
        size={24}
        color={theme == "light" ? "#000" : "#757474"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackButton;
