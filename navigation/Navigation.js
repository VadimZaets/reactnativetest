import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import MainNavigation from "./MainNavigation";

const MainStack = createStackNavigator();

const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Main" component={MainNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
