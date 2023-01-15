import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useAppContext } from "../context/myContext";
import { useNavigation } from "@react-navigation/native";

const LevelsMenu = () => {
  const navigation = useNavigation();
  const { Levels, CL } = useAppContext();

  return (
    <View style={styles.mainView}>
      <ScrollView>
        <Text style={styles.head}>انتخاب مرحله</Text>
        <View style={styles.row}>
          {Levels.map((lvl) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DictGame", { id: lvl.id })}
              style={styles.btn}
              disabled={!(lvl.id <= CL)}
              key={lvl.id}
            >
              {lvl.id <= CL ? (
                <Text style={styles.txt}>{lvl.id}</Text>
              ) : (
                <Image
                  style={styles.icon}
                  source={require("../assets/lock.png")}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LevelsMenu;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  mainView: {
    marginTop: 50,
  },
  head: {
    marginBottom: 10,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Lalezar",
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  btn: {
    backgroundColor: "#ed8f13",
    margin: 10,
    width: 110,
    height: 90,
    justifyContent: "center",
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
  icon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    color: "black",
  },
});
