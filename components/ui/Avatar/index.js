import React from "react";
import { Image, Text, useColorScheme, View } from "react-native";

const Avatar = ({}) => {
  const theme = useColorScheme() ?? "light";
  return (
    <View>
      <Image source={{ uri: "" }} style={{}} />
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: theme == "dark" ? "#FFF" : "#FFF",
          backgroundColor: "#0AB161",
        }}
      />
    </View>
  );
};

export default Avatar;
