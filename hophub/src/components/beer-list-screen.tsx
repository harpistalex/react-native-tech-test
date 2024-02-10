import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "./app-text";
import BeerListItem from "./beer-list-item";
import { Beer } from "./types";
import { usePaginatedAPI } from "../api";
import { DARK_GREEN, GREEN } from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN,
  },
  button: {
    padding: 8,
    backgroundColor: DARK_GREEN,
    textAlign: "center",
  },
  noData: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    marginVertical: 16,
  },
});

const keyExtractor = (item: Beer) => `${item.id}`;
const renderItem = (info: ListRenderItemInfo<Beer>) => {
  return <BeerListItem beer={info.item} />;
};

const BeerListScreen: React.FC = () => {
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
    return (
      <View style={styles.noData}>
        <AppText>Loading beers...</AppText>
        <ActivityIndicator style={styles.loader} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.noData}>
        <AppText>Oh no error!</AppText>
      </View>
    );
  }

  if (!beers || beers.length === 0) {
    return (
      <View style={styles.noData}>
        <AppText>No beers.</AppText>
      </View>
    );
  }

  const allBeers = beers.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={allBeers}
      />
      <Pressable onPress={getMoreBeers}>
        <AppText type="heading" style={styles.button}>
          Get more beers
        </AppText>
      </Pressable>
    </SafeAreaView>
  );
};

export default BeerListScreen;
