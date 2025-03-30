import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import Button from "../../components/ui/Button";

export default function Tab() {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView style={styles.container}>
      <Image
        source={
          theme == "light"
            ? require("../../assets/images/Ocolor.png")
            : require("../../assets/images/oblicua.png")
        }
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
          marginBottom: 30,
        }}
      />
      <ThemedText
        type="title"
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        Welcome to BrainBox
      </ThemedText>
      <ThemedText style={{ textAlign: "center", marginBottom: 30 }}>
        Start chatting with ChattyAI now. You can ask me anything.
      </ThemedText>
      <Button text="Get Started" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});
