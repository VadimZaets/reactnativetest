import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart";
import ProductNavigation from "./ProductNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Продукти"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Продукти") {
            iconName = focused
              ? "food-takeout-box"
              : "food-takeout-box-outline";
          } else if (route.name === "Корзина") {
            iconName = focused ? "cart" : "cart-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Продукти" component={ProductNavigation} />
      <Tab.Screen name="Корзина" component={Cart} />
    </Tab.Navigator>
  );
}
