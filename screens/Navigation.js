import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";

import RollScreen from "./RollScreen";
import SetScreen from "./SetScreen";
import Header from "../components/Header/Header";

const MainStack = createStackNavigator();
// <Routes>....</Routes> => Stack.Navigator

export const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Header />
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="RollScreen" component={RollScreen} />
        <MainStack.Screen name="SetScreen" component={SetScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

//  <NavigationContainer>
//    <Stack.Navigator>
//      <Stack.Screen name="SetScreen" component={SetScreen} />
//      <Stack.Screen name="RollScreen" component={RollScreen} />
//    </Stack.Navigator>
//  </NavigationContainer>
