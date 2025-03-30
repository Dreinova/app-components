import React, { useEffect, useState } from "react";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import Button from "../components/ui/Button";
import { router } from "expo-router";

const HomeScreen = ({}) => {
  // const [channels, setChannels] = useState([]);
  // async function fetchChannels() {
  //   const response = await fetch("/api/channels");
  //   const channelsData = await response.json();
  //   setChannels(channelsData.data);
  // }
  // useEffect(() => {
  //   // fetchChannels();
  // }, []);
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ paddingHorizontal: 25, alignItems: "center" }}>
        <Image
          source={
            theme == "light"
              ? require("../assets/images/Ocolor.png")
              : require("../assets/images/oblicua.png")
          }
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
            marginBottom: 30,
          }}
        />
        <ThemedText
          lightColor="#141718"
          darkColor="#FFFFFF"
          type="title"
          style={{ marginBottom: 63 }}
        >
          Bienvenido a Billy
        </ThemedText>

        <Button
          text="Log in"
          type="primary"
          style={{ marginBottom: 22 }}
          onPress={() => router.push("sign-in")}
        />
        <Button
          text="Sign up"
          type="secondary"
          style={{ marginBottom: 42 }}
          onPress={() => router.push("sign-up")}
        />
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
  );
};

const styles = StyleSheet.create({
  parallaxCarouselView: {},
});

export default HomeScreen;
