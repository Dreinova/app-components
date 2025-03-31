import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import BackButton from "../components/ui/BackButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Button from "../components/ui/Button";
import { router } from "expo-router";
const ForgetPassword = ({}) => {
  const theme = useColorScheme() ?? "light";
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <ThemedView
      style={{
        flex: 1,
        paddingVertical: 25,
      }}
    >
      <View style={{ paddingHorizontal: 35 }}>
        <BackButton />
        <ThemedText
          style={{ marginBottom: 10, width: 250, lineHeight: 50 }}
          type="title"
        >
          Forget Password
        </ThemedText>
        <ThemedText style={{ marginBottom: 43 }}>
          Select which contact details should we use to reset your password
        </ThemedText>
        <ThemedView
          darkColor="#232627"
          lightColor="#FFF"
          style={[
            {
              marginBottom: 25,
              borderRadius: 10,
            },
            theme == "light" && {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => setSelectedOption("email")}
            style={[
              {
                borderRadius: 10,
                padding: 15,
                flexDirection: "row",
                borderWidth: 2,
                borderColor: "transparent", // Por defecto sin borde
                gap: 18,
              },
              selectedOption === "email" && {
                borderColor:
                  theme === "light"
                    ? "black"
                    : Platform.OS === "ios"
                    ? "#FFF"
                    : "#aaa", // Color diferente en Android
              },
            ]}
          >
            <ThemedView
              darkColor="rgba(81,107,150,.5)"
              lightColor="rgba(54,54,54,.1)"
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            >
              <MaterialIcons
                name="email"
                size={24}
                color={theme == "light" ? "#141718" : "white"}
              />
            </ThemedView>
            <View>
              <ThemedText type="defaultSemiBold">Email</ThemedText>
              <ThemedText lightColor="#ACADB9">
                Code Send to your email
              </ThemedText>
            </View>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView
          darkColor="#232627"
          lightColor="#FFF"
          style={[
            {
              borderRadius: 10,
              marginBottom: 44,
            },
            theme == "light" && {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => setSelectedOption("phone")}
            style={[
              {
                borderRadius: 10,
                padding: 15,
                flexDirection: "row",
                borderWidth: 2,
                borderColor: "transparent", // Por defecto sin borde
                gap: 18,
              },
              selectedOption === "phone" && {
                borderColor:
                  theme === "light"
                    ? "black"
                    : Platform.OS === "ios"
                    ? "#FFF"
                    : "#aaa", // Color diferente en Android
              },
            ]}
          >
            <ThemedView
              darkColor="rgba(81,107,150,.5)"
              lightColor="rgba(54,54,54,.1)"
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            >
              <FontAwesome5
                name="phone-alt"
                size={24}
                color={theme == "light" ? "#141718" : "white"}
              />
            </ThemedView>
            <View>
              <ThemedText type="defaultSemiBold">Phone </ThemedText>
              <ThemedText lightColor="#ACADB9">
                Code Send to your phone
              </ThemedText>
            </View>
          </TouchableOpacity>
        </ThemedView>
        <Button
          text="Next"
          type="primary"
          style={[styles.button]}
          onPress={() => router.navigate("verify")}
          disabled={!selectedOption}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default ForgetPassword;
