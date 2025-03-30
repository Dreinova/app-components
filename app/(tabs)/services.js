import { View, Text, StyleSheet } from "react-native";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";

export default function Tab() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Tab [Home|Settings]</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
