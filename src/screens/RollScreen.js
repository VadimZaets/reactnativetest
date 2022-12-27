import axios from "axios";
import { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import { getRolls } from "../redux/userMenu/userOperation";
import { getIsLoading, getRollList } from "../redux/userMenu/userSelector";

const RollScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRolls());
  }, []);
  const isLoading = useSelector(getIsLoading);
  const roll = useSelector(getRollList);

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
            data={roll}
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

export default RollScreen;
