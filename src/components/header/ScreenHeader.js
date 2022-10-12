import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WaveShape from "../waveShape/WaveShape";

const ScreenHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <WaveShape />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  title: {
    position: "absolute",
    top: 60,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
export default ScreenHeader;
