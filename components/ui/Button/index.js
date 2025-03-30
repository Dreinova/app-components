import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../../ThemedText";
import { useThemeColor } from "../../../hooks/useThemeColor";

const Button = ({
  text,
  style,
  textStyle,
  type = "primary",
  onPress,
  ...props
}) => {
  const backgroundColor = useThemeColor(
    {
      light:
        type === "primary"
          ? "#000"
          : type === "secondary"
          ? "#E5E5EA"
          : "transparent",
      dark:
        type === "primary"
          ? "#1B1E20"
          : type === "secondary"
          ? "#2C2C2E"
          : "transparent",
    },
    "buttonBackground"
  );

  const textColor = useThemeColor(
    {
      light: type === "primary" ? "#FFF" : "#8E8E93",
      dark: type === "primary" ? "#FFF" : "#FFF",
    },
    "text"
  );

  return (
    <TouchableOpacity
      props
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <ThemedText
        type="defaultSemiBold"
        style={[styles.text, { color: textColor }, textStyle]}
      >
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: "100%",
    paddingVertical: 17,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default Button;
