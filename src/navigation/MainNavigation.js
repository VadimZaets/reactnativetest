import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductNavigation from "./ProductNavigation";
import CartScreen from "../screens/CartScreen";
import { Text, View } from "react-native";
import { getCartList } from "../redux/cart/cartSelector";
import { useSelector } from "react-redux";
import ItemsInCart from "../components/ItemsInCart/ItemsInCart";
import styled from "styled-components/native";
const Tab = createBottomTabNavigator();

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainNavigation = () => {
  const cartList = useSelector(getCartList);
  return (
    <Tab.Navigator
      initialRouteName="Продукти"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        inactiveTintColor: "gray",
        activeTintColor: "tomato",
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === "Продукти") {
        //       iconName = focused
        //         ? "food-takeout-box"
        //         : "food-takeout-box-outline";
        //     } else if (route.name === "Корзина") {
        //       iconName = focused ? "cart" : "cart-outline";
        //     }
        //     return (
        //       <MaterialCommunityIcons name={iconName} size={size} color={color} />
        //     );
        //   },
        // })}
      }}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Продукти"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Container>
              <MaterialCommunityIcons
                name={focused ? "food-takeout-box" : "food-takeout-box-outline"}
                size={size}
                color={color}
              />
              <Text>Продукти</Text>
            </Container>
          ),
        }}
      />

      <Tab.Screen
        name="Корзина"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Container>
              <MaterialCommunityIcons
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color={color}
              />
              <Text>Корзина</Text>
              {cartList.length > 0 ? <ItemsInCart /> : null}
            </Container>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigation;
