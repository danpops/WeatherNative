import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NavStack from "./routes/NavStack";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <NavStack />
    </NavigationContainer>
  );
}
