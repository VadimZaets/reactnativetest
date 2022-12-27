import { View } from "react-native";
import { useSelector } from "react-redux";
import { getCartQuntity } from "../../redux/cart/cartSelector";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #fb8500;
  border-radius: 14px;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  left: 24px;
  top: 4px;
`;
const ItemsInCart = () => {
  const quntity = useSelector(getCartQuntity);

  return (
    <>
      <Container>{quntity}</Container>
    </>
  );
};
export default ItemsInCart;
