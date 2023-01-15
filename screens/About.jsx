import { StyleSheet, Text, View } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.head}>درباره ما</Text>
      <Text style={styles.body}>
        اپلیکیشن یار دبستانی در راستای ارتقای مهارت‌های آموزشی و توانایی‌های
        فردی و کار به تکنولوژی دانش آموزان مقطع اول ابتدایی توسعه و به صورت
        رایگان منتشر شده است.
      </Text>
      <Text style={styles.body}>ایده پرداز و طراح مرحله: نیلوفر قدیری</Text>
      <Text style={styles.body}>برنامه نویس: رضا قدیری </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  mainView: {
    marginVertical: 45,
  },
  head: {
    fontFamily: "Lalezar",
    fontSize: 54,
    textAlign: "center",
  },
  body: {
    margin: 10,
    fontSize: 24,
    fontFamily: "VazirBold",
    textAlign: "center",
  },
});
