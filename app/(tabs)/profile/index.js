import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import BackButton from "../../../components/ui/BackButton";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Avatar from "../../../components/ui/Avatar";
import { router } from "expo-router";

const Profile = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 35,
          marginBottom: 55,
        }}
      >
        <BackButton style={{ marginBottom: 0 }} />
        <ThemedText type="subtitle" style={{ margin: 0 }}>
          Profile
        </ThemedText>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Avatar />
        <ThemedText type="title" style={{ margin: 0, textAlign: "center" }}>
          Tom Hillson
        </ThemedText>
        <ThemedText style={{ margin: 0, textAlign: "center" }}>
          Tomhill@mail.com
        </ThemedText>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 30, gap: 30 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 10,
          }}
        >
          <FontAwesome
            name="user"
            size={24}
            color={theme == "light" ? "#000" : "#FFF"}
          />
          <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
            Preferences
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 10,
          }}
          onPress={() => router.navigate("reset-password")}
        >
          <Entypo
            name="eye"
            size={24}
            color={theme == "light" ? "#000" : "#FFF"}
          />

          <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
            Account Security
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/settings/pay-methods")}
          style={{
            flexDirection: "row",
            alignItems: "center",

            gap: 20,
            paddingVertical: 10,
          }}
        >
          <Entypo
            name="credit-card"
            size={24}
            color={theme == "light" ? "#000" : "#FFF"}
          />
          <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
            Customer Support
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("sign-in")}
          style={{
            flexDirection: "row",
            alignItems: "center",

            gap: 20,
            paddingVertical: 10,
          }}
        >
          <SimpleLineIcons name="logout" size={24} color="black" />

          <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
            Logout
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
});
