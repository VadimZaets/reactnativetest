import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import ProductCard from "./components/ProductCard/ProductCard";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();
  const getItems = () => {
    setIsLoading(true);
    axios
      .get("https://6242cdd3b6734894c156b21f.mockapi.io/api/v1/items")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(getItems, []);
  return (
    <View>
      {isLoading && (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator size="large" />
          <Text>Загрузка...</Text>
        </View>
      )}
      {!isLoading && (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ProductCard name={item.name} price={item.price} />
            </TouchableOpacity>
          )}
        />
      )}

      <StatusBar theme="auto" />
    </View>
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
