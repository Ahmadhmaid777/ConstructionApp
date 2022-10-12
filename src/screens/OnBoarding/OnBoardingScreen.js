import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import Images from "../../assets/images/index";
import styles from "./styles";
import PagingIndecator from "../../components/PagingIndecator";
import ForwardToHomeButton from "./components/ForwardToHomeButton";
import { screen } from "./../../theme/index";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_KEYS } from "../../navigation";
const RenderItem = ({ item }) => {
  console.log("run image");
  return (
    <Image resizeMode="contain" source={item.image} style={styles.image} />
  );
};

export default function OnBoardingScreen() {
  let navigation = useNavigation();
  let [forwardButtonVisiable, setForwardButtonVisiable] = useState(false);
  let scrollx = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    navigation.navigate(SCREEN_KEYS.homeScreen);
  };
  const imagesData = [
    {
      id: 1,
      image: Images.firstOnBoardingScreenImage,
    },
    {
      id: 2,
      image: Images.secondOnBoardingScreenImage,
    },
  ];
  const onScrollListener = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    if (
      Math.round(offset / screen.width) < imagesData.length &&
      forwardButtonVisiable
    ) {
      setForwardButtonVisiable(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={imagesData}
        renderItem={({ item }) => <RenderItem item={item} />}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listStyle}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, indx) => indx}
        onEndReached={() => setForwardButtonVisiable(true)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          {
            useNativeDriver: false,
            listener: onScrollListener,
          }
        )}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PagingIndecator
          scrollx={scrollx}
          length={imagesData.length}
          style={styles.pagingIndecatorStyle}
        />
        <ForwardToHomeButton
          onPress={onPress}
          isVisiable={forwardButtonVisiable}
        />
      </View>
    </View>
  );
}
