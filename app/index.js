import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CAROUSEL_PROPERTIES from "../constants/CarouselProperties";
import CarouselComponent from "../components/CarouselComponent";

const HomeScreen = ({}) => {
  const [channels, setChannels] = useState([]);
  async function fetchChannels() {
    const response = await fetch("/api/channels");
    const channelsData = await response.json();
    setChannels(channelsData.data);
  }
  useEffect(() => {
    // fetchChannels();
  }, []);

  return (
    <View>
      <CarouselComponent data={CAROUSEL_PROPERTIES.CAROUSEL_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  parallaxCarouselView: {
    paddingVertical: CAROUSEL_PROPERTIES.OFFSET,
  },
});

export default HomeScreen;
