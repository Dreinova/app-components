import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import BackButton from "../components/ui/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../components/ui/Button";
import Animated, { useSharedValue } from "react-native-reanimated";
const intervalWidth = Dimensions.get("screen").width - 80;
var formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});
const PlanCard = ({ plans, plan, index }) => {
  let {
    attributes: { credits, name, price },
  } = plan;

  const theme = useColorScheme() ?? "light";
  return (
    <View
      style={{
        marginRight: index == plans.length - 1 ? undefined : 10,
        width: intervalWidth,
      }}
    >
      {index == 0 ? (

      <ThemedView
      darkColor="#232627"
      lightColor="#141718"
        style={{
          alignSelf: "center",
          borderRadius: 25,
          paddingHorizontal: 43,
          paddingVertical: 8,
          marginBottom: -20,
          zIndex: 2,
          borderWidth:1,
          borderColor: theme == "light" ? "transparent" : "#4B4B4B"
        }}
      >
        <Text style={{ color: "#FFF", textAlign: "center", fontSize: 20 }}>
          Most Popular
        </Text>
      </ThemedView>
      ) : (<View style={{
        paddingHorizontal: 43,
        paddingVertical: 8,
        marginBottom: -20,
        height:40
      }} />)}
      <ThemedView
        darkColor="#232627"
        lightColor="#FFF"
        style={{
          borderRadius: 10,
          paddingTop: 43,
          paddingBottom: 18,
        }}
      >
        <ThemedText
          darkColor="#FFF"
          lightColor="#001133"
          type="defaultSemiBold"
          style={{
            textAlign: "center",
            fontSize: 32,
            lineHeight: 32,
            marginBottom: 20,
          }}
        >
          {name}
        </ThemedText>
        <ThemedText
          darkColor="#FFF"
          lightColor="#001133"
          style={{ textAlign: "center", fontSize: 50, lineHeight: 50 }}
        >
          {formatter.format(price)}
        </ThemedText>
      </ThemedView>
      <ThemedView
        darkColor="#232627"
        lightColor="#FFF"
        style={{
          borderRadius: 10,
          padding: 20,
          gap: 6,
        }}
      >
        <ThemedView
          darkColor="#141718"
          lightColor="#F8FaFF"
          style={{
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
            <ThemedText
              darkColor="#FFF"
              lightColor="#001133"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              10000 Text
            </ThemedText>
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
        </ThemedView>
        <ThemedView
          darkColor="#141718"
          lightColor="#F8FaFF"
          style={{
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
            <ThemedText
              darkColor="#FFF"
              lightColor="#001133"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              {credits} creditos
            </ThemedText>
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
        </ThemedView>
        <ThemedView
          darkColor="#141718"
          lightColor="#F8FaFF"
          style={{
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
            <ThemedText
              darkColor="#FFF"
              lightColor="#001133"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              10000 Text
            </ThemedText>
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
        </ThemedView>
        <ThemedView
          darkColor="#141718"
          lightColor="#F8FaFF"
          style={{
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
            <ThemedText
              darkColor="#FFF"
              lightColor="#001133"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              10000 Text
            </ThemedText>
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
        </ThemedView>
        <ThemedView
          darkColor="#141718"
          lightColor="#F8FaFF"
          style={{
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
            <ThemedText
              darkColor="#FFF"
              lightColor="#001133"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              10000 Text
            </ThemedText>
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
        </ThemedView>

        <Button
          text="Claim Offer"
          style={{
            borderRadius: 10,
            marginTop: 20,
            backgroundColor: "#141718",
          }}
        />
      </ThemedView>
    </View>
  );
};

const Plans = ({}) => {
  const scrollX = useSharedValue(0);
  const [plans, setPlans] = useState([]);
  async function fetchPlans() {
    const response = await fetch("/api/plans");
    const plansData = await response.json();
    setPlans(plansData.data);
  }
  useEffect(() => {
    fetchPlans();
  }, []);
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
          {plans.map((plan, index) => (
            <PlanCard key={index} index={index} plan={plan} plans={plans} />
          ))}
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
