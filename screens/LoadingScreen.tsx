//boilerplate
import React, { Component } from "react";
import { View, Image, StyleSheet, Text, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading... </Text>
        <ActivityIndicator size="large" color="#AF6A03" />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/police-car-bro.png")}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fcf9f7",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#AF6A03",
    // marginBottom: 10,
  },
  image: {
    // opacity: 0.6,
    width: 390,
    height: 600,
    marginHorizontal: 10,
    // marginTop: 10,
  },
});
