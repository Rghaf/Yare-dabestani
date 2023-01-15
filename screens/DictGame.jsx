import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";
import { useAppContext } from "../context/myContext";
import MyModal from "../components/Modal";

const DictGame = ({ route }) => {
  const [sound, setSound] = useState();
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const { id } = route.params;
  const { Levels, changeCL } = useAppContext();

  async function playSound() {
    const url = Levels[id - 1].audio;
    const { sound } = await Audio.Sound.createAsync(url);
    // "../assets/audio/1.m4a"
    // {
    //     uri: "../assets/audio/1.m4a",
    //   }
    setSound(sound);
    await sound.playAsync();
  }

  const handleAnswer = () => {
    if (input === Levels[id - 1].answer) {
      setModalType("win");
      setModalVisible(true);
      changeCL(id + 1);
    } else {
      setModalType("looseD");
      setModalVisible(true);
    }
  };

  //   useEffect(() => {
  //     return sound
  //       ? () => {
  //           console.log("Unloading Sound");
  //           sound.unloadAsync();
  //         }
  //       : undefined;
  //   }, [sound]);
  return (
    <View style={styles.mainView}>
      <Text style={styles.head}>مرحله {id}</Text>
      <View style={styles.Q}>
        <Text style={styles.head}>
          به صدای زیر خوب و تا انتها گوش بده و جواب درست رو بنویس
        </Text>
        <Button title="پخش صدا" onPress={playSound} />
      </View>
      <TextInput
        onChangeText={(newText) => setInput(newText)}
        onEndEditing={() => {
          handleAnswer();
        }}
        placeholder="با دقت اینجا بنویس"
        style={styles.input}
      />
      <Text style={styles.ans}>{input}</Text>
      <MyModal
        show={modalVisible}
        setShow={setModalVisible}
        text1={
          modalType === "win"
            ? "آفرین درست بود!"
            : "اشتباه بود یک بار دیگه تلاش کن"
        }
        btntxt={modalType === "win" ? "مرحله بعد" : "باشه"}
        btntxt2={"بازگشت"}
        comp={["DictGame", { id: id + 1 }]}
        type={modalType}
        id={id}
      />
    </View>
  );
};

export default DictGame;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
  },
  head: {
    marginBottom: 10,
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Lalezar",
    color: "black",
  },
  ans: {
    marginBottom: 20,
    fontSize: 38,
    textAlign: "center",
    fontFamily: "VazirBold",
    color: "black",
  },
  Q: {
    textAlign: "center",
    width: "90%",
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    fontFamily: "VazirBold",
    fontSize: 52,
    padding: 35,
  },
  input: {
    backgroundColor: "white",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    fontSize: 32,
  },
});
