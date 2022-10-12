import { StyleSheet } from "react-native";
import { screen } from "../../theme";
export default styles = StyleSheet.create({
  image: {
    width: screen.width,
  },
  listStyle: {
    justifyContent: "center",
    alignSelf: "center",
  },
  mainContainer: {
    flex: 1,
  },
  pagingIndecatorStyle: {
    position: "absolute",
    left: 1,
    right: 1,
  },
});
