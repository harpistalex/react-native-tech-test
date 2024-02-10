import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./app-text";
import { Beer } from "./types";
import { GREEN } from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: "center",
    backgroundColor: GREEN,
  },
  image: {
    height: 60,
    width: 60,
  },
  name: {
    fontWeight: "bold",
  },
  description: {
    marginHorizontal: 8,
  },
});

interface Props {
  beer: Beer;
}

const BeerListItem: React.FC<Props> = ({ beer }) => {
  console.log(beer.image_url);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: beer.image_url,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <AppText style={styles.name}>{beer.name}</AppText>
      <AppText numberOfLines={1} style={styles.description}>
        {beer.description}
      </AppText>
    </View>
  );
};

export default BeerListItem;
