import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import CAROUSEL_PROPERTIES from "../constants/CarouselProperties";

const ParallaxCarouselCard = ({ item, scrollX, total, id }) => {
  const inputRange = [
    (id - 1) * CAROUSEL_PROPERTIES.ITEM_WIDTH,
    id * CAROUSEL_PROPERTIES.ITEM_WIDTH,
    (id + 1) * CAROUSEL_PROPERTIES.ITEM_WIDTH,
  ];
  const translateStyle = useAnimatedStyle(() => {
    const translate = interpolate(
      scrollX.value,
      inputRange,
      [0.97, 0.97, 0.97],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.6, 1, 0.6],
      Extrapolation.CLAMP
    );
    return { transform: [{ scale: translate }], opacity };
  });
  const translateImageStyle = useAnimatedStyle(() => {
    const translate = interpolate(scrollX.value, inputRange, [
      -CAROUSEL_PROPERTIES.ITEM_WIDTH * 0.2,
      0,
      CAROUSEL_PROPERTIES.ITEM_WIDTH * 0.4,
    ]);
    return { transform: [{ translateX: translate }] };
  });
  return (
    <Animated.View
      style={[
        {
          width: CAROUSEL_PROPERTIES.ITEM_WIDTH,
          height: CAROUSEL_PROPERTIES.ITEM_HEIGHT,
          marginLeft: id === 0 ? CAROUSEL_PROPERTIES.OFFSET : undefined,
          marginRight:
            id === total - 1 ? CAROUSEL_PROPERTIES.OFFSET : undefined,
          overflow: "hidden",
          borderRadius: 14,
        },
        translateStyle,
      ]}
    >
      <Animated.View style={[translateImageStyle]}>
        <ImageBackground
          source={{ uri: item }}
          style={styles.imageBgStyle}
        ></ImageBackground>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageBgStyle: {
    resizeMode: "cover",
    borderRadius: 14,
    overflow: "hidden",
    height: CAROUSEL_PROPERTIES.ITEM_HEIGHT,
  },
});

export default ParallaxCarouselCard;
