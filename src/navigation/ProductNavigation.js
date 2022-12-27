import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header/Header";
import SetScreen from "../screens/SetScreen";
import RollScreen from "../screens/RollScreen";

const ProductStack = createStackNavigator();

const ProductNavigation = () => {
  return (
    <>
      <Header />
      <ProductStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SetScreen"
      >
        <ProductStack.Screen name="SetScreen" component={SetScreen} />
        <ProductStack.Screen name="RollScreen" component={RollScreen} />
      </ProductStack.Navigator>
    </>
  );
};

export default ProductNavigation;
