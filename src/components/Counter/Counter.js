import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { removeItem, setItemsInCart } from "../../redux/cart/cartSlice";

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;
const CounterButton = styled.Pressable`
  height: 50px;
  width: 60px;
  border-radius: 8px;
  padding: 12px 20px;
  align-items: center;
  justify-content: center;
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-style: solid;
`;
const CounterText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fb8500;
`;
const QuntityContainer = styled.View`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
`;
const QuntityText = styled.Text`
  font-size: 20px;
`;
const Counter = ({ id, quntity, cart }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(id));
  };
  const handleClick = () => {
    dispatch(setItemsInCart(cart));
  };

  return (
    <Container>
      <CounterButton onPress={handleClick}>
        <CounterText>+</CounterText>
      </CounterButton>

      <QuntityContainer>
        <QuntityText>{quntity}</QuntityText>
      </QuntityContainer>
      {quntity > 1 ? (
        <CounterButton onPress={handleRemove}>
          <CounterText>-</CounterText>
        </CounterButton>
      ) : null}
    </Container>
  );
};

export default Counter;

//  <div className={styles.counter}>
//    <button onClick={handleClick} className={styles.btn}>
//      +
//    </button>
//    <input type="number" value={quntity} className={styles.input} />
//    {quntity > 1 ? (
//      <button onClick={handleRemove} className={styles.btn}>
//        -
//      </button>
//    ) : null}
//  </div>;
