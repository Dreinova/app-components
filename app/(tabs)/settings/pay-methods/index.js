import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedView } from "../../../../components/ThemedView";
import { ThemedText } from "../../../../components/ThemedText";
import BackButton from "../../../../components/ui/BackButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const PayMethods = ({}) => {
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
          Payment Methods
        </ThemedText>
      </View>
      <ThemedText type="title" style={{ marginBottom: 30 }}>
        My Cards
      </ThemedText>
      <View style={{ height: 180, marginBottom: 30 }}>
        <FlatList
          fadingEdgeLength={30}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[{}, {}, {}, {}]}
          ListHeaderComponent={() => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                borderRadius: 20,
                borderColor: "#ccc",
                marginRight: 20,
                borderStyle: "dashed",
                borderWidth: 2,
                padding: 20,
              }}
            >
              <Entypo name="plus" size={24} color={"#9E9E9E"} />
            </TouchableOpacity>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#232627",
                borderRadius: 20,
                padding: 20,
                width: 200,
                justifyContent: "space-between",
                height: 178,
                marginRight: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Ionicons name="card-outline" size={24} color={"white"} />
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <ThemedView
                    darkColor="#FFF"
                    lightColor="#FFF"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "white",
                      borderRadius: 5,
                    }}
                  />
                  <ThemedView
                    darkColor="#FFF"
                    lightColor="#FFF"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "white",
                      borderRadius: 5,
                    }}
                  />
                  <ThemedView
                    darkColor="#FFF"
                    lightColor="#FFF"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "white",
                      borderRadius: 5,
                    }}
                  />
                  <ThemedView
                    darkColor="#FFF"
                    lightColor="#FFF"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "rgba(255, 255, 255, 1)", // Blanco puro
                      borderRadius: 5,
                    }}
                  />

                  <ThemedText style={{ fontSize: 20, color: "white" }}>
                    1411
                  </ThemedText>
                </View>
              </View>
              <View>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  Mastercard
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                  }}
                >
                  <Text style={{ fontSize: 20, color: "white" }}>Platinum</Text>
                  <Image
                    source={require("../../../../assets/images/mastercard.png")}
                    style={{ width: 40, height: 40, resizeMode: "contain" }}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemedText type="subtitle">Transactions history</ThemedText>
        <ThemedText>Today</ThemedText>
      </View>
    </ThemedView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
});

export default PayMethods;
