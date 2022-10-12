import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./stacks/MainStack";

export default function AppContainer() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
