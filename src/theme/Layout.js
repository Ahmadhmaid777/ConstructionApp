import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const spacing = {
  none: 0,
  tiny: 4,
  smaller: 6,
  small: 8,
  medium: 12,
  normal: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 28,
  xxxLarge: 34,
  huge: 40,
  content: 20,
};

export const screen = {
  width,
  height,
  contentOffset: width * 0.8,
};
