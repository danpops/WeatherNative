import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Search";
import Weather from "../screens/Weather";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTransparent: true,
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={({ route }) => ({
          title: `${route.params.city}, ${route.params.country}`,
        })}
      />
    </Stack.Navigator>
  );
};

export default NavStack;
