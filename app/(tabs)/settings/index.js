import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { ThemedView } from "../../../components/ThemedView";
import { ThemedText } from "../../../components/ThemedText";
import BackButton from "../../../components/ui/BackButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Tab() {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
          marginBottom: 55,
        }}
      >
        <BackButton style={{ marginBottom: 0 }} />
        <ThemedText type="title" style={{ margin: 0 }}>
          Preference
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
          <View>
            <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
              Account Information
            </ThemedText>
            <ThemedText>Change your Account information</ThemedText>
          </View>
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
          <View>
            <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
              Password
            </ThemedText>
            <ThemedText>Change your Password</ThemedText>
          </View>
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
          <View>
            <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
              Payment Methods
            </ThemedText>
            <ThemedText>Add Your Credit / Credit Cards</ThemedText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("settings/invite")}
          style={{
            flexDirection: "row",
            alignItems: "center",

            gap: 20,
            paddingVertical: 10,
          }}
        >
          <MaterialIcons
            name="mode-edit-outline"
            size={24}
            color={theme == "light" ? "#000" : "#FFF"}
          />
          <View>
            <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
              Invite Your Friends
            </ThemedText>
            <ThemedText>Get $3 For Each Invitation!</ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
});
