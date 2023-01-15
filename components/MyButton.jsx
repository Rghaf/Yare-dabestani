import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyButton = ({ title, comp }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(comp)}
      style={styles.btn}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed8f13",
    margin: 10,
    width: "50%",
    marginHorizontal: 100,
    borderRadius: 15,
    padding: 5,
    borderWidth: 5,
    borderColor: "black",
  },
  txt: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "VazirBold",
  },
});
