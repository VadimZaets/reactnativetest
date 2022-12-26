import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import Main from "./Main";

const MainStack = createStackNavigator();

export const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Main" component={Main} />
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
