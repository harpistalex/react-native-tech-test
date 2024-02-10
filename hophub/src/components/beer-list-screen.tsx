import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const BeerListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beer Screen</Text>
      <Text style={styles.body}>Beer will be listed here...</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default BeerListScreen;