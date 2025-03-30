import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import BackButton from "../components/ui/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../components/ui/Button";
import Animated, { useSharedValue } from "react-native-reanimated";

const intervalWidth = Dimensions.get("screen").width - 80;
const PlanCard = ({}) => {
  return (
    <View style={{ marginLeft: 10 }}>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "#141718",
          borderRadius: 25,
          paddingHorizontal: 33,
          paddingVertical: 8,
          marginBottom: -20,
          zIndex: 2,
          width: intervalWidth,
        }}
      >
        <Text style={{ color: "#FFF", textAlign: "center", fontSize: 23 }}>
          Most Popular
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 10,
          paddingTop: 43,
          paddingBottom: 18,
        }}
      >
        <Text style={{ color: "#001133", textAlign: "center", fontSize: 32 }}>
          Monthly
        </Text>
        <Text style={{ color: "#001133", textAlign: "center", fontSize: 70 }}>
          $12
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 10,
          padding: 20,
          gap: 6,
        }}
      >
        <View
          style={{
            backgroundColor: "#F8FAFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              borderRadius: 10,
            }}
          >
            <EvilIcons name="arrow-right" size={25} color="#0AB161" />
            <Text
              style={{ color: "#001133", fontSize: 20, fontWeight: "bold" }}
            >
              10000 Text
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#0AB161",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="checkmark" size={20} color="white" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F8FAFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              borderRadius: 10,
            }}
          >
            <EvilIcons name="arrow-right" size={25} color="#0AB161" />
            <Text
              style={{ color: "#001133", fontSize: 20, fontWeight: "bold" }}
            >
              Next level Ai
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#0AB161",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="checkmark" size={20} color="white" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F8FAFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              borderRadius: 10,
            }}
          >
            <EvilIcons name="arrow-right" size={25} color="#0AB161" />
            <Text
              style={{ color: "#001133", fontSize: 20, fontWeight: "bold" }}
            >
              Secure Your Text
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#0AB161",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="checkmark" size={20} color="white" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F8FAFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              borderRadius: 10,
            }}
          >
            <EvilIcons name="arrow-right" size={25} color="#0AB161" />
            <Text
              style={{ color: "#001133", fontSize: 20, fontWeight: "bold" }}
            >
              Daily Updates
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#0AB161",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="checkmark" size={20} color="white" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F8FAFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              borderRadius: 10,
            }}
          >
            <EvilIcons name="arrow-right" size={25} color="#0AB161" />
            <Text
              style={{ color: "#001133", fontSize: 20, fontWeight: "bold" }}
            >
              Unlimeted
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#0AB161",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="checkmark" size={20} color="white" />
          </View>
        </View>
        <Button
          text="Claim Offer"
          style={{ borderRadius: 10, marginTop: 20 }}
        />
      </View>
    </View>
  );
};

const Plans = ({}) => {
  const scrollX = useSharedValue(0);
  return (
    <ScrollView>
      <ThemedView
        style={{ flex: 1, paddingVertical: 55, paddingHorizontal: 22 }}
        lightColor="#F3F5F6"
        darkColor="#141718"
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
            marginBottom: 55,
          }}
        >
          <BackButton style={{ marginBottom: 0 }} />
          <ThemedText type="subtitle" style={{ textAlign: "center" }}>
            Subscription
          </ThemedText>
        </View>
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          decelerationRate={"fast"}
          snapToInterval={intervalWidth}
          disableIntervalMomentum
          bounces={false}
          scrollEventThrottle={12}
          onScroll={(event) => {
            scrollX.value = event.nativeEvent.contentOffset.x;
          }}
        >
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </Animated.ScrollView>
        <ThemedText
          type="defaultSemiBold"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 27,
            marginBottom: 10,
          }}
        >
          Payment Notice
        </ThemedText>
        <ThemedText style={{ textAlign: "center" }}>
          Balance must be paid in full within the time limit indicated in the
          Payment Notice.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Plans;
