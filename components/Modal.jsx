import { StyleSheet, Text, View, Modal, Alert, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../context/myContext";

const MyModal = ({
  show,
  setShow,
  scr,
  text1,
  text2,
  btntxt,
  btntxt2,
  comp,
  type,
  id,
}) => {
  const navigation = useNavigation();
  const { changeCL, save } = useAppContext();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShow(!show);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              type === "win" ? styles.modalViewWin : styles.modalViewLoose,
            ]}
          >
            <Text style={styles.txt}>{text1}</Text>
            <Text style={styles.txt2}>
              {text2}
              {scr}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (type === "win") {
                  navigation.navigate(comp[0], comp[1]);
                } else if (type === "looseD") {
                  navigation.navigate("LevelsMenu");
                } else {
                  navigation.navigate(comp);
                }
              }}
            >
              <Text style={styles.textStyle}>{btntxt}</Text>
            </Pressable>
            {type === "win" ? (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate("Menu")}
              >
                <Text style={styles.textStyle}>{btntxt2}</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewLoose: {
    backgroundColor: "rgba(255, 0, 0, 0.77)",
  },
  modalViewWin: {
    backgroundColor: "green",
  },
  txt: {
    fontSize: 48,
    fontFamily: "VazirBold",
    margin: 20,
    textAlign: "center",
  },
  txt2: {
    fontSize: 26,
    fontFamily: "VazirBold",
    marginBottom: 40,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
