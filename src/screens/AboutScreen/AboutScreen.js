import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../assets";
import styles from "./styles";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={images.secondOnBoardingScreenImage}
        style={styles.logo}
      />
      <Text style={styles.whoAreWe}>من نحن</Text>
      <Text
        style={styles.paragraph}
      >{`نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من 
اعمال الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب 
الكهرباء والسباكة والنجارة واعمال السيراميك والرخام والواجهات 
والدهانات.
`}</Text>
      <Text
        style={styles.paragraph}
      >{`نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من الوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة.`}</Text>
      <Text
        style={styles.paragraph}
      >{`نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب 
المتطورة والاشكال العصرية`}</Text>
    </View>
  );
};

export default AboutScreen;
