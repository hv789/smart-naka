import { View, Text, StyleSheet, Button } from "react-native";

import React from "react";

import HistoryItem from "../components/HistoryItem";

const SearchHistoryScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("DetailsScreen");
  };

  return (
    <View style={styles.rootContainer}>
      <HistoryItem
        VehicleNumber="UP 93 AD 9876"
        date="10/12/2022"
        time="22:50"
      />
      <HistoryItem
        VehicleNumber="UP 93 AD 9876"
        date="10/12/2022"
        time="22:50"
      />
      <Button title="Go to Details" onPress={pressHandler} />
    </View>
  );
};

export default SearchHistoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fcf9f7",
  },
});
