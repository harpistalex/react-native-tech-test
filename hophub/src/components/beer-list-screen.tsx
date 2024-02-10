import { router } from "expo-router";
import { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Beer } from "./types";
import { usePaginatedAPI } from "../api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontFamily: "BebasNeue",
  },
  body: {
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const BeerListScreen: React.FC = () => {
  const onPress = useCallback(() => {
    router.navigate("/beer-detail");
  }, []);

  const { data, size, setSize, isLoading, isValidating, error } =
    usePaginatedAPI<Beer[]>("beers", 10);

  const getMoreBeers = useCallback(() => {
    setSize(size + 1);
  }, [size]);

  if (isLoading || isValidating) {
    return <Text>Loading beers...</Text>;
  }

  if (error) {
    return <Text>Oh no error!</Text>;
  }

  if (data) {
    console.log("SIZE:", size);
    console.log("DATA:", data[data.length - 1][0]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beer Screen</Text>
      <Text style={styles.body}>Beer will be listed here...</Text>
      <Pressable onPress={getMoreBeers}>
        <Text>More beers</Text>
      </Pressable>
      <View style={styles.separator} />
      <Pressable onPress={onPress}>
        <Text>Go to detail screen</Text>
      </Pressable>
      <View style={styles.separator} />
    </View>
  );
};

export default BeerListScreen;
