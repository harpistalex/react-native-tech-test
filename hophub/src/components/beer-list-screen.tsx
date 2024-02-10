import { router } from "expo-router";
import { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import AppText from "./app-text";
import BeerListItem from "./beer-list-item";
import { Beer } from "./types";
import { usePaginatedAPI } from "../api";
import { DARK_GREEN } from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DARK_GREEN,
    padding: 8,
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

  const {
    data: beers,
    size,
    setSize,
    isLoading,
    isValidating,
    error,
  } = usePaginatedAPI<Beer[]>("beers", 10);

  const getMoreBeers = useCallback(() => {
    setSize(size + 1);
  }, [size]);

  if (isLoading || isValidating) {
    return <Text>Loading beers...</Text>;
  }

  if (error) {
    return <Text>Oh no error!</Text>;
  }

  if (!beers) {
    return <Text>No beers.</Text>;
  }
  if (beers) {
    console.log("SIZE:", size);
    console.log("DATA:", beers[beers.length - 1][0]);
  }

  console.log(beers[beers.length - 1][0]); // Single beer
  console.log(beers[beers.length - 1][0].image_url);

  return (
    <View style={styles.container}>
      <AppText type="heading">Beer list</AppText>
      <Text style={styles.body}>Beer will be listed here...</Text>
      <Pressable onPress={getMoreBeers}>
        <Text>More beers</Text>
      </Pressable>
      <View style={styles.separator} />
      <Pressable onPress={onPress}>
        <Text>Go to detail screen</Text>
      </Pressable>
      <View style={styles.separator} />
      <BeerListItem beer={beers[beers.length - 1][0]} />
    </View>
  );
};

export default BeerListScreen;
