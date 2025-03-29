import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import CAROUSEL_PROPERTIES from "../constants/CarouselProperties";

const PaginationDot = ({ index, scrollX }) => {
  const inputRange = [
    (index - 1) * CAROUSEL_PROPERTIES.ITEM_WIDTH,
    index * CAROUSEL_PROPERTIES.ITEM_WIDTH,
    (index + 1) * CAROUSEL_PROPERTIES.ITEM_WIDTH,
  ];
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      scrollX.value,
      inputRange,
      [10, 20, 10],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.6, 1, 0.6],
      Extrapolation.CLAMP
    );
    return { width: widthAnimation, opacity };
  });
  const animatedColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [0, CAROUSEL_PROPERTIES.ITEM_WIDTH, 2 * CAROUSEL_PROPERTIES.ITEM_WIDTH],
      ["#9095A7", "#9095A7", "#9095A7"]
    );
    return { backgroundColor };
  });
  return (
    <Animated.View
      style={[styles.dots, animatedDotStyle, animatedColorStyle]}
    />
  );
};

const styles = StyleSheet.create({
  dots: {
    height: 10,
    marginHorizontal: 8,
    borderRadius: 5,
  },
});

export default PaginationDot;
