import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";

const ForwardToHomeButton = ({ isVisiable, onPress }) => {
  const tranlateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(tranlateY, {
      toValue: isVisiable ? -100 : 100,
      useNativeDriver: false,
    }).start();
  }, [isVisiable]);

  return (
    <Animated.View
      style={[styles.mainConatiner, { transform: [{ translateY: tranlateY }] }]}
    >
      <Pressable onPress={onPress}>
        <AntDesign name="arrowright" size={24} color="black" />
      </Pressable>
    </Animated.View>
  );
};
export default ForwardToHomeButton;
const styles = StyleSheet.create({
  mainConatiner: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#333",
    position: "absolute",
    bottom: 0,
    padding: 4,
  },
});
