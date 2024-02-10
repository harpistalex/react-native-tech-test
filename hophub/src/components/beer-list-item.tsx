import { router } from "expo-router";
import React, { useCallback } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import AppText from "./app-text";
import { DetailsRouteParams } from "./beer-detail-screen";
import { Beer } from "./types";
import { GREEN, YELLOW } from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 4,
    alignItems: "center",
    backgroundColor: GREEN,
    borderWidth: 2,
    borderColor: YELLOW,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  image: {
    height: 60,
    width: 60,
  },
  name: {
    fontFamily: "MontserratBold",
  },
  description: {
    flex: 1,
  },
});

interface Props {
  beer: Beer;
}

const BeerListItem: React.FC<Props> = ({ beer }) => {
  const displayParams: DetailsRouteParams = {
    image: beer.image_url,
    name: beer.name,
    abv: String(beer.abv),
    tagline: beer.tagline,
    description: beer.description,
    firstBrewed: beer.first_brewed,
  };
  const onPress = useCallback(() => {
    router.navigate({ pathname: "/beer-detail", params: displayParams });
  }, []);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: beer.image_url,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <AppText style={styles.name}>{beer.name}</AppText>
        <AppText numberOfLines={1} style={styles.description}>
          {beer.description}
        </AppText>
      </View>
    </Pressable>
  );
};

export default BeerListItem;
