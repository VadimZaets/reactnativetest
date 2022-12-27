import { FlatList, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CartList from "../components/CartList/CartList";
import { getCartList } from "../redux/cart/cartSelector";
import styled from "styled-components/native";
const Container = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const CartImage = styled.Image`
  width: 30%;
  height: 20%;
  margin-bottom: 20px;
`;
const CartText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const CartScreen = () => {
  const cart = useSelector(getCartList);

  return (
    <View>
      {cart.length > 0 ? (
        <Container>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartList
                name={item.name}
                price={item.price}
                id={item.id}
                description={item.description}
                weight={item.weight}
                number={item.number}
                totalItemPrice={item.totalItemPrice}
                quntity={item.quntity}
              />
            )}
          />
        </Container>
      ) : (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CartImage source={require("../../assets/logo.png")} />
          <CartText>Ваша корзина пуста</CartText>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
