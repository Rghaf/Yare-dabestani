import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import MyButton from "../components/MyButton";
import { useAppContext } from "../context/myContext";

const Menu = () => {
  const { Levels } = useAppContext();
  const [loaded] = useFonts({
    Lalezar: require("../assets/fonts/Lalezar-Regular.ttf"),
    VazirBold: require("../assets/fonts/Vazir-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text style={styles.head}>یار دبستانی</Text>
      <MyButton title="دیکته بازی" comp="LevelsMenu" />
      <MyButton title="بازی ریاضی" comp="Math" />
      <MyButton title="درباره ما" comp="About" />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  head: {
    marginTop: 120,
    marginBottom: 90,
    fontSize: 80,
    textAlign: "center",
    fontFamily: "Lalezar",
  },
});
