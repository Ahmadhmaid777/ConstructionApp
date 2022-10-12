import {
  Alert,
  BackHandler,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import React, { useState } from "react";
import { ScreenHeader, WaveShape } from "../../components";
import services from "../../constants/Services";
import styles from "./styles";
import ServiceItem from "./components/ServiceItem";
import { useFocusEffect } from "@react-navigation/native";

const renderItem = ({ item, index }) => {
  return <ServiceItem item={item} index={index} />;
};
const renderListHeader = () => {
  return <Text style={styles.headerTitle}>الفهرس</Text>;
};

const showAlert = () => {
  Alert.alert("backBress");
};

function HomeScreen() {
  let [isEnabled, setIsEnabled] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isEnabled) {
          Alert.alert("hello are you sure");
          setIsEnabled(false);
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [isEnabled])
  );
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={"light-content"}
      />
      <View style={styles.header}>
        <ScreenHeader title={"المقاولات"} />
      </View>
      <View style={styles.servicesList}>
        <FlatList
          numColumns={2}
          ListHeaderComponent={renderListHeader}
          data={services}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.servicesListContentContainer}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export default HomeScreen;
