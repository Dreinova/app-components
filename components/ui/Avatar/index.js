import React from "react";
import { Image, Platform, Text, useColorScheme, View } from "react-native";

const Avatar = ({}) => {
  const theme = useColorScheme() ?? "light";
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 30,
        width: 120,
        position: "relative",
      }}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/31085625/pexels-photo-31085625/free-photo-of-pajaro-pequeno-posado-en-un-alambre-contra-un-fondo-suave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ width: 120, height: 120, borderRadius: 60 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 10,
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor:
            theme === "light"
              ? "black"
              : Platform.OS === "ios"
              ? "#FFF"
              : "#e2e2e2", // Color diferente en Android,
          backgroundColor: "#0AB161",
        }}
      />
    </View>
  );
};

export default Avatar;
