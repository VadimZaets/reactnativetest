import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getCartQuntity } from "../../redux/cart/cartSelector";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fb8500;
  border-radius: 14px;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
  left: 38px;
  bottom: 25px;
`;
const ItemsText = styled.Text`
  color: white;
`;
const ItemsInCart = () => {
  const quntity = useSelector(getCartQuntity);

  return (
    <>
      <Container>
        <ItemsText>{quntity}</ItemsText>
      </Container>
    </>
  );
};
export default ItemsInCart;
