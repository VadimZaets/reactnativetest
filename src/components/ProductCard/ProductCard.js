import { useSelector } from "react-redux";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Card = styled.View`
  position: relative;
  width: 90%;
  height: 226px;
  cursor: pointer;
  margin-bottom: 32px;
  padding: 0;
  border-radius: 24px;

  /* clear: none;
  float: none; */
`;
const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;
const ProductContent = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 16px;
`;
const ProductTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`;
const ProductWrapp = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
const ProductButton = styled.Pressable`
  height: 48px;
  width: 120px;
  border-radius: 8px;
  background-color: #fb8500;
  padding: 12px 20px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const ProductCard = ({ price, name }) => {
  return (
    <Container>
      <Card>
        <ProductImage source={require("../../../assets/dragon.png")} />
        <ProductContent>
          <ProductTitle>{name}</ProductTitle>
          <ProductWrapp>
            <ProductPrice>{price} грн</ProductPrice>
            <ProductButton onPress={() => alert("sssss")}>
              <ButtonText>Замовити</ButtonText>
            </ProductButton>
          </ProductWrapp>
        </ProductContent>
      </Card>
    </Container>
  );
};

export default ProductCard;
