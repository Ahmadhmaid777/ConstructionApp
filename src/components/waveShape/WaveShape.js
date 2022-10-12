import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WaveShape() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 60,
    height: 120,
    width: 120,
    marginTop: -20,
    transform: [{ scaleX: 4 }],
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#7380a1",
    paddingBottom: 15,
  },
  title: {
    transform: [{ scaleX: 0.3 }],
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
