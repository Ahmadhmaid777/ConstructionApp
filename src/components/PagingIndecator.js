import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import { screen, spacing } from "../theme";
export default function PagingIndecator({ length, scrollx, style }) {
  let dotPosition = Animated.divide(scrollx, screen.width);

  return (
    <View style={[styles.pagerContainer, { width: length * 20 }]}>
      {new Array(length).fill("").map((item, index) => {
        let dotOpacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        let dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [8, 12, 8],
          extrapolate: "clamp",
        });

        let dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: ["#333333", "#000000", "#333333"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            opacity={dotOpacity}
            key={"dot" + index}
            style={{
              backgroundColor: dotColor,
              height: dotSize,
              width: dotSize,
              borderRadius: 50,
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  pagerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: spacing.large,
    position: "absolute",
    bottom: screen.height * 0.3,
  },
});
