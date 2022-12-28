import { View, Text, Image, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput, ScrollView } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import HorizontalLine from "../components/HorizontalLine";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.rootContainer}>
          <Image style={styles.image} source={require("../assets/APLogo.png")} />
          <View style={styles.searchVehicleView}>
            <Text style={styles.searchText}>Search by Registration Number</Text>
            <TextInput style={styles.VehicleInput} placeholder="Vehicle Registration Number" />
          </View>
            <HorizontalLine /> 
          {/**Expandable Filter */}
          <View style={styles.filterViewCollapsed}>
            <Text style={styles.filterText}>Filter by other criteria</Text>
            <MaterialIcons name="add-box" size={40} color="#9D5E00" />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  //root Views
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf9f7",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fcf9f7",
  },
  image: {
    opacity: 0.6,
    width: 200,
    height: 200,
    marginTop: 20,
  },
  //search area
  searchVehicleView: {
    alignSelf: "stretch",
    marginTop: 20,
    marginHorizontal: 6,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD56C",
    borderRadius: 10,
    elevation: 15,
  },
  searchText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#9D5E00"
  },
  VehicleInput: {
    padding: 7,
    margin: 5,
    marginTop: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF4B7",
    borderRadius: 10,
    fontSize: 20,
  },
  //filter area
  filterViewCollapsed: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginHorizontal: 6,
    padding: 8,
    justifyContent: "space-between",
    backgroundColor: "#FFD56C",
    borderRadius: 10,
    elevation: 15,
  },
  filterText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#9D5E00"
  },
});
