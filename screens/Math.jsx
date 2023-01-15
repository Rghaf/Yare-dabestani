import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import MyModal from "../components/Modal";
// generate two random numbers between 1, 20
// show two button with four numbers
// save the correct one and compare
const MathGame = () => {
  const [score, setScore] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [choosed, setChoosed] = useState(1);
  const [bt1, setBt1] = useState(styles.btn);
  const [correct, setCorrect] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
  };

  const wrongAnswer = () => {
    return Math.floor(Math.random() * 40) + 1;
  };

  const chooseBtn = () => {
    if (Math.random() < 0.5) {
      setChoosed(1);
    } else {
      setChoosed(2);
    }
  };

  const handleAnswer = () => {
    setBt1(styles.btn);
    setScore(score + 1);
  };

  const handleWrong = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    setNum1(getRandomNumber);
    setNum2(getRandomNumber);
    chooseBtn();
  }, [score]);

  useEffect(() => {
    setCorrect(num1 + num2);
  });

  return (
    <View>
      <Text style={styles.score}>امتیاز : {score}</Text>
      <Text style={styles.Q}>
        {num1} + {num2}
      </Text>
      <View style={styles.btns}>
        <TouchableOpacity
          onPress={() => {
            choosed === 1 ? handleAnswer() : handleWrong();
          }}
          style={styles.btn}
        >
          <Text style={styles.txt} nativeID="1">
            {choosed === 1 ? correct : wrongAnswer()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            choosed === 2 ? handleAnswer() : handleWrong();
          }}
          style={styles.btn}
        >
          <Text style={styles.txt} nativeID="2">
            {choosed === 2 ? correct : wrongAnswer()}
          </Text>
        </TouchableOpacity>
      </View>
      <MyModal
        show={modalVisible}
        setShow={setModalVisible}
        scr={score}
        text1={"باختی !!!"}
        text2={"امتیاز شما : "}
        btntxt={"بازگشت"}
        comp="Menu"
        type={"loose"}
      />
    </View>
  );
};

export default MathGame;

const styles = StyleSheet.create({
  score: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "VazirBold",
    marginTop: 40,
    backgroundColor: "#ed8f13",
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
    padding: 55,
  },
  btns: {
    marginTop: 50,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    color: "white",
    margin: 15,
    width: "50%",
    marginHorizontal: 100,
    borderRadius: 15,
    padding: 20,
    borderWidth: 5,
    borderColor: "black",
  },
  cor: {
    backgroundColor: "green",
  },
  wr: {
    backgroundColor: "red",
  },
  txt: {
    color: "white",
    fontSize: 38,
    fontFamily: "VazirBold",
  },
});
