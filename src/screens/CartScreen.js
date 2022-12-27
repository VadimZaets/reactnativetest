import { FlatList, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CartList from "../components/CartList/CartList";
import { getCartList } from "../redux/cart/cartSelector";
import styled from "styled-components/native";
const Container = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const CartScreen = () => {
  const cart = useSelector(getCartList);

  return (
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
  );
};

export default CartScreen;
