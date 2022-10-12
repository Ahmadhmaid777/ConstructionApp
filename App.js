import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { fonts } from "./src/assets";
import AppContainer from "./src/navigation/AppContainer";
import OnBoardingScreen from "./src/screens/OnBoarding/OnBoardingScreen";
import { fontsFamily } from "./src/theme";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
