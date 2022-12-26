import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from "react-native";
import ProductCard from "../components/ProductCard/ProductCard";

const SetScreen = ({ navigation }) => {
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
        <View>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ProductCard name={item.name} price={item.price} />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SetScreen;
