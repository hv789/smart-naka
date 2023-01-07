import { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput, ScrollView, Pressable } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalLine from "../components/HorizontalLine";
import PrimaryButton from "../components/PrimaryButton";

const HomeScreen = ({ navigation }:{navigation:any}) => {

  const pressHandler = () => {
    navigation.navigate("InputScreen");
  };

  const registrationNumberHandler = () => {
    navigation.navigate("ASInputScreen");
  }

  const filterDropDown: string[] = ["name","vehicle","date","time","location","status","type","description","officer","region"]
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.safeArea}>
      <View style={styles.rootContainer}>
          {/**HEADER FOR THE APP */}
          <View style={styles.headerView}>
            <View style={styles.headerImageView}>
              <Image
                style={styles.headerImage}
                resizeMode="contain"
                source={require("../assets/header.png")}
              />
            </View>
            <Text style={styles.headerText}>Search for Vehicle</Text>
          </View>
          {/**BUTTONS */}
          <View style={styles.buttonsView}>
            <PrimaryButton 
              text="Registration Number"
              //textStyle={{paddingLeft:13}}
              icon={<MaterialIcons name="search" size={85} color="#926900" />}
              //onPress={registrationNumberHandler}
              onPress={pressHandler}
            />
            <HorizontalLine/>
            <PrimaryButton 
              text="Advanced Search"
              //textStyle={{paddingLeft:20}}
              icon={<MaterialIcons name="format-list-bulleted" size={85} color="#926900" />}
              onPress={registrationNumberHandler}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  //root Views
  safeArea: {
    flex: 1,
    backgroundColor: "#FEF4CC",
  },
  scrollArea: {
    flex: 1,
    backgroundColor: "#FEF4CC",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FEF4CC",
    paddingBottom: 20,
  },
  headerView: {
    backgroundColor: "#FFC400",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    elevation: 15,
  },
  headerImageView: {
    alignItems: "center",
    height: 175,
    width: 250,
  },
  headerImage: {
    height: 175,
    width: 250,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#965A00",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonsView: {
    marginVertical: 30,
    flex: 1,
    justifyContent: "space-between",
  },
});
