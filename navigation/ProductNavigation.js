import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header/Header";
import RollScreen from "../screens/RollScreen";
import SetScreen from "../screens/SetScreen";
const ProductStack = createStackNavigator();

const ProductNavigation = () => {
  return (
    <>
      <Header />
      <ProductStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <ProductStack.Screen name="SetScreen" component={SetScreen} />
        <ProductStack.Screen name="RollScreen" component={RollScreen} />
      </ProductStack.Navigator>
    </>
  );
};

export default ProductNavigation;
