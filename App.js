import * as React from "react";
import { StyleSheet, View, ImageBackground, StatusBar } from "react-native";
import AppNavigator from "./App.navigator";
import { AppContextProvider } from "./context/myContext";

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground
          source={require("./assets/Background.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <AppNavigator />
        </ImageBackground>
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
