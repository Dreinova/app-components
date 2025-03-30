import React from "react";
import { Image, Text, useColorScheme, View } from "react-native";
import CopyableText from "../../../components/ui/CopyableText";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import BackButton from "../../../components/ui/BackButton";
const imageDark = require("../../../assets/images/inviteDark.png");
const imageLight = require("../../../assets/images/inviteLight.png");
const Invite = ({}) => {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView
      style={{
        paddingVertical: 25,
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <BackButton style={{ marginBottom: 0 }} />
      </View>
      <View style={{ paddingHorizontal: 90, alignItems: "center" }}>
        <ThemedText type="title">Invite</ThemedText>
        <Image
          source={theme == "light" ? imageLight : imageDark}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
            marginVertical: 30,
          }}
        />
        <ThemedText type="subtitle">Refer A Friend</ThemedText>
        <ThemedText style={{ textAlign: "center", marginBottom: 30 }}>
          Share Your Promo Code & Get $3 For Each Friend
        </ThemedText>
        <CopyableText text="BrainAiPartnerMR" style={{ fontSize: 16 }} />
      </View>
    </ThemedView>
  );
};

export default Invite;
