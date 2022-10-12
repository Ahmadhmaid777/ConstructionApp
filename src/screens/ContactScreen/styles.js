import { StyleSheet } from "react-native";
import { fontsFamily } from "../../theme";

const styles = StyleSheet.create({
  scanImage: {
    marginTop: 70,
    width: 250,
    height: 250,
  },
  container: {
    alignItems: "center",
  },
  contactInfoLable: {
    fontFamily: fontsFamily["Roboto-Bold"],
    fontSize: 22,
    color: "#262626",
    marginTop: 90,
  },
  contactInfo: {
    fontSize: 22,
    fontFamily: fontsFamily["Roboto-Medium"],
    color: "#262626",
    textAlign: "right",
    marginTop: 10,
    lineHeight: 40,
  },
});

export default styles;
