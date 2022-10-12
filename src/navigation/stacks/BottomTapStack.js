import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREEN_KEYS } from "..";
import HomeStack from "./HomeStack";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AboutScreen, ContactScreen } from "../../screens";
import { colors, spacing } from "../../theme";

const TapStack = createBottomTabNavigator();

export default function BottomTap() {
  return (
    <TapStack.Navigator
      initialRouteName={SCREEN_KEYS.homeScreen}
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { marginTop: spacing.tiny },
        tabBarLabelStyle: {
          marginBottom: spacing.tiny,
          marginTop: spacing.tiny,
        },
        gestureDirection: "horizontal",
        gestureEnabled: true,
        // if you want to change the back swipe width
        gestureDirection: "horizontal",
        gestureResponseDistance: {
          horizontal: 10,
        },
      }}
    >
      <TapStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? colors.black : colors.primary}
            />
          ),
          tabBarLabel: "الرئيسية",
        }}
        name={SCREEN_KEYS.HomeStack}
        component={HomeStack}
      />
      <TapStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="phone"
              size={24}
              color={focused ? colors.black : colors.primary}
            />
          ),
          tabBarLabel: "تواصل معنا",
        }}
        name={SCREEN_KEYS.contactScreen}
        component={ContactScreen}
      />
      <TapStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="infocirlce"
              size={24}
              color={focused ? colors.black : colors.primary}
            />
          ),
          tabBarLabel: "من نحن",
        }}
        name={SCREEN_KEYS.aboutScreen}
        component={AboutScreen}
      />
    </TapStack.Navigator>
  );
}

const styles = StyleSheet.create({});
