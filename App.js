import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";

import { Navigation } from "./screens/Navigation";
import SetScreen from "./screens/SetScreen";
export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

{
  /* <div className={styles.list}>
  <ul className={styles.list_el}>
    {product.map(({ _id, img, weight, number, name, description, price }) => (
      <li key={_id} className={styles.item}>
        <img src="/test.png" alt={description} className={styles.img} />
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.description_block}>
            <p
              className={styles.description}
              onClick={() =>
                handleInfo({
                  _id,
                  img,
                  weight,
                  number,
                  name,
                  description,
                  price,
                })
              }
            >
              {description}
            </p>
          </div>
          <div className={styles.recent_cart}>
            <div className={styles.cart_wrapper}>
              <p className={styles.product_price}>{price} грн</p>
              <p className={styles.product_weight}>| {weight} г</p>
            </div>

            <a
              href=""
              onClick={() =>
                handleClick({
                  _id,
                  img,
                  weight,
                  number,
                  name,
                  description,
                  price,
                })
              }
              className={styles.product_btn}
            >
              Замовити
            </a>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>; */
}
