import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import ParallaxCarouselPagination from "./ParallaxCarouselPagination";
import ParallaxCarouselCard from "./ParallaxCarouselCard";
import CAROUSEL_PROPERTIES from "../constants/CarouselProperties";

const CarouselComponent = ({ data }) => {
  const scrollX = useSharedValue(0);
  return (
    <View style={styles.parallaxCarouselView}>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        decelerationRate={"fast"}
        snapToInterval={CAROUSEL_PROPERTIES.ITEM_WIDTH}
        disableIntervalMomentum
        bounces={false}
        scrollEventThrottle={12}
        onScroll={(event) => {
          scrollX.value = event.nativeEvent.contentOffset.x;
        }}
      >
        {data.map((image, index) => (
          <ParallaxCarouselCard
            item={image}
            key={index}
            id={index}
            scrollX={scrollX}
            total={data.length}
          />
        ))}
      </Animated.ScrollView>
      <ParallaxCarouselPagination data={data} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  parallaxCarouselView: {
    paddingVertical: CAROUSEL_PROPERTIES.OFFSET,
  },
});

export default CarouselComponent;
