import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { deleteItemsFromCart } from "../../redux/cart/cartSlice";
import Counter from "../Counter/Counter";
import { Entypo } from "@expo/vector-icons";
const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const CartCard = styled.View`
  position: relative;
  width: 90%;
  /* display: flex;
  flex-direction: column; */
  border-radius: 8px;
  padding: 24px 24px;
  shadow-color: rgba(117, 118, 132, 0.3);
  elevation: 1;
`;
const ImageTitleWrapp = styled.View`
  display: flex;
  flex-direction: row;
`;
const CartImage = styled.Image`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  margin-right: 20px;
`;
const TitleWrapp = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
`;
const PriceWrapp = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Price = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;
const DeleteButton = styled.Pressable`
  position: absolute;
  right: 6px;
  top: 6px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const CartList = ({
  name,
  price,
  id,
  description,
  weight,
  number,
  totalItemPrice,
  quntity,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (cart) => {
    console.log("cartid :>> ", cart.id);
    dispatch(deleteItemsFromCart({ id: cart.id }));
  };
  return (
    <Container>
      <CartCard>
        <ImageTitleWrapp>
          <CartImage source={require("../../../assets/dragon.png")} />
          <TitleWrapp>
            <Title>{name}</Title>
            <Text>
              {weight} г · {number} шт
            </Text>
          </TitleWrapp>
        </ImageTitleWrapp>
        <PriceWrapp>
          <Counter
            id={id}
            quntity={quntity}
            cart={{
              id,

              weight,
              number,
              name,
              description,
              price,
              quntity,
            }}
          />
          <Price>{totalItemPrice} грн</Price>
        </PriceWrapp>
        <DeleteButton
          onPress={() =>
            handleDelete({
              id,
            })
          }
        >
          <Text>
            <Entypo name={"cross"} />
          </Text>
        </DeleteButton>
      </CartCard>
    </Container>
  );
};

export default CartList;
