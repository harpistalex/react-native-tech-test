import { router } from "expo-router";
import { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beer Screen</Text>
      <Text style={styles.body}>Beer will be listed here...</Text>
      <View style={styles.separator} />
      <Pressable onPress={onPress}>
        <Text>Go to detail screen</Text>
      </Pressable>
      <View style={styles.separator} />
    </View>
  );
};

export default BeerListScreen;
