import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemedView } from "../../ThemedView";
import { ThemedText } from "../../ThemedText";

const CopyableText = ({ text, style }) => {
  const theme = useColorScheme() ?? "light";
  const [copiedText, setCopiedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <ThemedView
      style={[
        styles.container,
        { borderColor: theme == "light" ? "#000" : "#FFF" },
      ]}
    >
      <ThemedText style={styles.copyButtonText}>{text}</ThemedText>
      <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
        {isCopied ? (
          <FontAwesome
            name="check-square-o"
            size={24}
            color={theme == "light" ? "#000" : "#FFF"}
          />
        ) : (
          <Ionicons
            name="copy"
            size={24}
            color={theme == "light" ? "#000" : "#FFF"}
          />
        )}
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 2,

    borderRadius: 10,
    width: "100%",
  },
  copyButton: {
    padding: 8,
    borderRadius: 5,
  },
  copyButtonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CopyableText;
