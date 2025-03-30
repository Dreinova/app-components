import React, { useState } from "react";
import { TextInput, TouchableOpacity, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemedView } from "../../ThemedView";

const CustomInput = ({
  placeholder,
  icon,
  secureTextEntry = false,
  value,
  onChangeText,
  style,
}) => {
  const theme = useColorScheme() ?? "light";
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <ThemedView
      lightColor="#FFF"
      darkColor="#232627"
      style={[
        {
          padding: 20,
          alignItems: "center",
          borderRadius: 12,
          flexDirection: "row",
          shadowColor: theme == "light" ? "#000" : "#FFF",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          borderWidth: value.length > 0 ? 2 : 1,
          borderColor:
            value.length > 0
              ? theme === "light"
                ? "#141718"
                : "#FFF"
              : "#DADADA",
        },
        style,
      ]}
    >
      {icon && icon()}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#C2C3CB"
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        style={{
          fontSize: 14,
          color:
            value.length > 0
              ? theme === "light"
                ? "#000"
                : "#FFF"
              : "#C2C3CB",

          fontWeight: "600",
          flex: 1,
          marginLeft: 10,
        }}
        value={value}
        onChangeText={onChangeText} // 🔹 Actualiza el estado en el padre
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={"#C2C3CB"}
          />
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};

export default CustomInput;
