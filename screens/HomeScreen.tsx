import { View, Text, Image, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Image style={styles.image} source={require("../assets/APLogo.png")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fcf9f7",
  },

  image: {
    opacity: 0.6,
    width: 200,
    height: 200,
  },
});
