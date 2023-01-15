import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    id: 1,
    audio: require("../assets/audio/1.m4a"),
    answer: "آدامس",
  },
  {
    id: 2,
    audio: require("../assets/audio/2.m4a"),
    answer: "آدم",
  },
  {
    id: 3,
    audio: require("../assets/audio/3.m4a"),
    answer: "آسمان",
  },
  {
    id: 4,
    audio: require("../assets/audio/4.m4a"),
    answer: "آمد",
  },
  {
    id: 5,
    audio: require("../assets/audio/5.m4a"),
    answer: "ابر",
  },
  {
    id: 6,
    audio: require("../assets/audio/6.m4a"),
    answer: "ابرو",
  },
  {
    id: 7,
    audio: require("../assets/audio/7.m4a"),
    answer: "ادب",
  },
  {
    id: 8,
    audio: require("../assets/audio/8.m4a"),
    answer: "اسب",
  },
  {
    id: 9,
    audio: require("../assets/audio/9.m4a"),
    answer: "اسد",
  },
  {
    id: 10,
    audio: require("../assets/audio/10.m4a"),
    answer: "انار",
  },
  {
    id: 11,
    audio: require("../assets/audio/11.m4a"),
    answer: "بادام",
  },
  {
    id: 12,
    audio: require("../assets/audio/12.m4a"),
    answer: "باران",
  },
  {
    id: 13,
    audio: require("../assets/audio/13.m4a"),
    answer: "برادر",
  },
  {
    id: 14,
    audio: require("../assets/audio/14.m4a"),
    answer: "بوستان",
  },
  {
    id: 15,
    audio: require("../assets/audio/15.m4a"),
    answer: "تنور",
  },
  {
    id: 16,
    audio: require("../assets/audio/16.m4a"),
    answer: "توت",
  },
  {
    id: 17,
    audio: require("../assets/audio/17.m4a"),
    answer: "دادم",
  },
  {
    id: 18,
    audio: require("../assets/audio/18.m4a"),
    answer: "داس",
  },
  {
    id: 19,
    audio: require("../assets/audio/19.m4a"),
    answer: "داماد",
  },
  {
    id: 20,
    audio: require("../assets/audio/20.m4a"),
    answer: "درمان",
  },
  {
    id: 21,
    audio: require("../assets/audio/21.m4a"),
    answer: "دما",
  },
  {
    id: 22,
    audio: require("../assets/audio/22.m4a"),
    answer: "دود",
  },
  {
    id: 23,
    audio: require("../assets/audio/23.m4a"),
    answer: "دوست",
  },
  {
    id: 24,
    audio: require("../assets/audio/24.m4a"),
    answer: "رود",
  },
  {
    id: 25,
    audio: require("../assets/audio/25.m4a"),
    answer: "سرد",
  },
  {
    id: 26,
    audio: require("../assets/audio/26.m4a"),
    answer: "مادر",
  },
  {
    id: 27,
    audio: require("../assets/audio/27.m4a"),
    answer: "ماست",
  },
];

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [levels, setLevels] = useState(data);
  const [currentLevel, setCurrentLevel] = useState(1);
  useEffect(() => {
    const firstLoad = async () => {
      const value = await AsyncStorage.getItem("data");
      try {
        if (value != null) {
          // currentLevel(value);
          const loaded = JSON.parse(value);
          setCurrentLevel(loaded.lvl);
          console.log("LOADED!", JSON.parse(value), loaded.lvl);
        } else {
          setCurrentLevel(1);
        }
      } catch (err) {
        console.log("VALUEERROR", JSON.parse(value));
        console.log("ERROR", err);
      }
    };
    firstLoad();
  }, []);

  useEffect(() => {
    const saveLvl = async () => {
      console.log("FORM SAVING!!");
      const value = {
        lvl: currentLevel,
      };
      try {
        await AsyncStorage.setItem("data", JSON.stringify(value));
        console.log("SAVED!", value);
      } catch (err) {
        console.log(err, "value: ", value);
      }
    };
    saveLvl();
  }, [currentLevel]);

  return (
    <AppContext.Provider
      value={{
        Levels: levels,
        CL: currentLevel,
        changeCL: setCurrentLevel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
