import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PaginationDot from "./PaginationDot";

const ParallaxCarouselPagination = ({ data, scrollX }) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <PaginationDot index={index} scrollX={scrollX} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default ParallaxCarouselPagination;
