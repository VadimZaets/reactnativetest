import { View, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import styled from "styled-components/native";
const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  padding: 15px;
`;
const styles = StyleSheet.create({
  Links: {
    fontSize: 18,
  },
});
const Header = () => {
  return (
    <Container>
      <Link to={{ screen: "SetScreen" }} style={styles.Links}>
        Сети
      </Link>
      <Link to={{ screen: "RollScreen" }} style={styles.Links}>
        Роли
      </Link>
      <Link to={{ screen: "RollScreen" }} style={styles.Links}>
        Піца
      </Link>
      <Link to={{ screen: "RollScreen" }} style={styles.Links}>
        Бургер
      </Link>
      <Link to={{ screen: "RollScreen" }} style={styles.Links}>
        Локшина
      </Link>
    </Container>
  );
};

export default Header;
