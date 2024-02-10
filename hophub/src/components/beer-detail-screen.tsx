import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Image, View } from "react-native";

import AppText from "./app-text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 8,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "80%",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  bold: {
    fontFamily: "MontserratBold",
    marginRight: 8,
  },
});

export type DetailsRouteParams = {
  image: string;
  name: string;
  abv: string;
  tagline: string;
  description: string;
  firstBrewed: string;
};

const BeerDetailScreen: React.FC = () => {
  const params = useLocalSearchParams<DetailsRouteParams>();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: params.image,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <AppText type="heading">{params.name}</AppText>
      <AppText>{params.tagline}</AppText>
      <View style={styles.separator} />
      <AppText>{params.description}</AppText>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AppText style={styles.bold}>ABV:</AppText>
        <AppText>{params.abv}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.bold}>First brewed:</AppText>
        <AppText>{params.firstBrewed}</AppText>
      </View>
    </View>
  );
};

export default BeerDetailScreen;
