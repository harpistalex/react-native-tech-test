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

const BeerDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beer Detail</Text>
      <Text style={styles.body}>Beer details will be here...</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default BeerDetailScreen;
