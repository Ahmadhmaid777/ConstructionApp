import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen } from "../../screens";
import BottomTapStack from "./BottomTapStack";
import { SCREEN_KEYS } from "..";
const Stack = createNativeStackNavigator();
export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_KEYS.onBoardingScreen}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        // if you want to change the back swipe width
        gestureDirection: "horizontal",
        gestureResponseDistance: {
          horizontal: 10,
        },
      }}
    >
      <Stack.Screen
        name={SCREEN_KEYS.onBoardingScreen}
        component={OnBoardingScreen}
      />
      <Stack.Screen name={SCREEN_KEYS.homeScreen} component={BottomTapStack} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
