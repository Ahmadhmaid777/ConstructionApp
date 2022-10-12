import { View, Text, Image } from "react-native";
import React from "react";
import { ScreenHeader } from "../../components";
import { images } from "../../assets";
import styles from "./styles";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={"تواصل معنا"} />
      <Image source={images.scan} style={styles.scanImage} />
      <View>
        <Text style={styles.contactInfoLable}>:تواصل معنا على</Text>

        <Text style={styles.contactInfo}>{`infa@afaa8.com
0096652709005
العنوان : المملكة العربية
 السعودية`}</Text>
      </View>
    </View>
  );
};

export default ContactScreen;
