import { StyleSheet } from "react-native";
import { spacing } from "../../theme";
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    zIndex: 2,
  },

  servicesListContentContainer: {
    paddingHorizontal: spacing.normal,
    paddingBottom: spacing.xxxLarge,
    paddingTop: spacing.large,
  },
  servicesList: {
    marginTop: -20,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
});

export default styles;
