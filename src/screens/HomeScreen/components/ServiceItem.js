import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors, fontsFamily, spacing } from "../../../theme";

const ServiceItem = ({ item: { title, img }, index }) => {
  return (
    <Pressable
      style={[styles.container, (index + 1) % 2 == 0 && styles.startSpace]}
    >
      <View style={styles.imageContainer}>
        <Image source={img} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    paddingVertical: spacing.medium,
    flex: 1,
    borderRadius: spacing.small,
    backgroundColor: "white",
    marginVertical: spacing.medium,
    elevation: 4,
  },
  startSpace: {
    marginStart: 15,
  },
  imageContainer: {
    width: 50,
    height: 50,
    padding: spacing.small,
    backgroundColor: colors.lightPrimary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "#2d2d2d",
    marginTop: spacing.medium,
    fontFamily: fontsFamily["Roboto-Medium"],
  },
});
export default ServiceItem;
