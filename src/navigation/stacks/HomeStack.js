import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_KEYS } from "..";
import { HomeScreen } from "../../screens";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_KEYS.homeScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={HomeScreen} name={SCREEN_KEYS.homeScreen} />
    </Stack.Navigator>
  );
}
