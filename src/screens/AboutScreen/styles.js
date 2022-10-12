import { StyleSheet } from "react-native";
import { colors, spacing } from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.normal,
    flex: 1,
  },
  logo: {
    width: 140,
    height: 160,
    marginTop: 100,
    alignSelf: "center",
  },
  whoAreWe: {
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "center",

    color: colors.gray,
    marginVertical: spacing.xxxLarge * 2,
  },
  paragraph: {
    fontSize: 14,
    color: colors.gray,

    textAlign: "right",
    marginBottom: spacing.medium,
  },
});

export default styles;
