import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screens/Menu";
import MathGame from "./screens/Math";
import LevelsMenu from "./screens/LevelsMenu";
import DictGame from "./screens/DictGame";
import About from "./screens/About";

const Stack = createNativeStackNavigator();

const navTheme = {
  // ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Math" component={MathGame} />
        <Stack.Screen name="LevelsMenu" component={LevelsMenu} />
        <Stack.Screen
          name="DictGame"
          component={DictGame}
          getId={({ params }) => params.id}
          options={{
            back: "LevelsMenu",
          }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
