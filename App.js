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
import Navigation from "./navigation/Navigation";

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
