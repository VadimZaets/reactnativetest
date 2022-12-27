import { useEffect } from "react";

import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import { getSets } from "../redux/userMenu/userOperation";
import { getIsLoading, getSetsList } from "../redux/userMenu/userSelector";

const SetScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSets());
  }, []);
  const isLoading = useSelector(getIsLoading);
  const sets = useSelector(getSetsList);
  console.log("sets :>> ", sets);
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
            data={sets}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  description={item.description}
                  weight={item.weight}
                  number={item.number}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SetScreen;
