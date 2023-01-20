import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Data } from "./data";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const data = Data;
  const [levels, setLevels] = useState(data);
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
    const firstLoad = async () => {
      const value = await AsyncStorage.getItem("data");
      try {
        if (value != null) {
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
