import { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput, ScrollView, Pressable } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalLine from "../components/HorizontalLine";

const HomeScreen = ({ navigation }:{navigation:any}) => {
  //state and constants for expandable filter:
  const [isFilterExpanded, setIsFilterExpanded] = useState<Boolean>(false);
  const [choosenFilter, setChoosenFilter] = useState<string[]>([]);

  const pressHandler = () => {
    navigation.navigate("DetailsScreen");
  };

  const FilterExpandHandler = () => {
    setIsFilterExpanded(!isFilterExpanded);
  }
  const filterHandler= (filterChosen:string) => {
    setChoosenFilter([...choosenFilter, filterChosen]);
    console.log(choosenFilter);
  }
  const filterDropDown: string[] = ["name","vehicle","date","time","location","status","type","description","officer","region"]
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.safeArea}>
      <View style={styles.rootContainer}>
          <Image style={styles.image} source={require("../assets/APLogo.png")} />
          <View style={styles.searchVehicleView}>
            <Text style={styles.searchText}>Search by Registration Number</Text>
            <TextInput style={styles.VehicleInput} placeholder="Vehicle Registration Number" />
          </View>
            <HorizontalLine /> 
          {/**Expandable Filter */}
          { !isFilterExpanded &&
          <View style={styles.filterViewCollapsed}>
            <Pressable
            style={styles.pressableContainerCollapsed}
            onPress={FilterExpandHandler}
            android_ripple={{color: "#FFF4B7"}}
            >
                <Text style={styles.filterText}>Filter by other criteria</Text>
                <MaterialIcons
                 name="add-box" 
                 size={40} 
                 color="#9D5E00" 
                 style={styles.filterIcon}
                 />
            </Pressable>
          </View>
          } 
          { isFilterExpanded &&
          <View style={styles.filterViewExpanded}>
            <View style={styles.ExpandedHeader}>
              <Pressable
              style={styles.pressableContainerCollapsed}
              onPress={FilterExpandHandler}
              android_ripple={{color: "#FFF4B7"}}
              >
                  <Text style={styles.filterText}>Filter by other criteria</Text>
                  <MaterialIcons
                  name="indeterminate-check-box" 
                  size={40} 
                  color="#9D5E00" 
                  style={styles.filterIcon}
                  />
              </Pressable>
            </View>
            <View style={styles.expandedView}>
              <Text style={[styles.filterText,{marginBottom: 5}]}>Search by Filter:
              </Text>
              <SelectDropdown
                  data={filterDropDown}
                  onSelect={(selectedItem, index) => {
                    filterHandler(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                  buttonStyle={styles.dropDownView} buttonTextStyle={{color: "#767676", fontSize: 20,}}
                  renderDropdownIcon={() => {
                    return (
                      <MaterialIcons name="arrow-drop-down" size={24} color="#767676" style={{marginRight: 10}} />
                    )}}
                  dropdownStyle={styles.dropDownItem}
                  search = {true}
                  searchInputStyle={{backgroundColor: "#FFF4B7", borderWidth: 1, borderRadius: 10,}}
                  searchPlaceHolder = "Search for a filter..."
                  searchPlaceHolderColor="#7A5401"
                  renderSearchInputLeftIcon= {() => {
                    return (
                      <MaterialIcons name="search" size={24} color="#7A5401"/>
                    )}}
              />
              <Text style={[styles.filterText, {marginBottom: 0}]}>Filter Value:</Text>
              <TextInput style={styles.VehicleInput} placeholder="Filter Value" />
            </View>
          </View>
          }
          {/**SUBMIT BUTTON YAHA PE HAI */}
          <Pressable style={styles.submitButton} onPress={pressHandler} android_ripple={{color: "#d69533"}}>
            <Text style={[styles.filterText,{color:"#FFF4B7", fontSize:30}]}>Submit</Text>
          </Pressable>
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
    backgroundColor: "#fcf9f7",
  },
  scrollArea: {
    flex: 1,
    backgroundColor: "#fcf9f7",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fcf9f7",
    paddingBottom: 20,
  },
  image: {
    opacity: 0.6,
    width: 200,
    height: 200,
    marginTop: 10,
  },
  //search area
  searchVehicleView: {
    alignSelf: "stretch",
    marginTop: 20,
    marginHorizontal: 5,
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
    margin: 4,
    marginTop: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF4B7",
    borderRadius: 10,
    fontSize: 20,
  },

        //filter area
  //filter collapsed & expanded      
  filterViewCollapsed: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginHorizontal: 5,
    justifyContent: "space-between",
    backgroundColor: "#FFCE50",
    borderRadius: 10,
    elevation: 15,
    overflow: "hidden",
  },
  filterViewExpanded: {
    alignSelf: "stretch",
    alignItems: "stretch",
    marginHorizontal: 5,
    paddingBottom: 3,
    justifyContent: "space-between",
    backgroundColor: "#FFDF8F",
    borderRadius: 10,
    elevation: 15,
    overflow: "hidden",
  },
  //pressables for filter
  pressableContainerCollapsed: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  //filter text, icon in collapsed and expanded
  filterText: {
    margin: 8,
    fontSize: 23,
    fontWeight: "bold",
    color: "#9D5E00"
  },
  filterIcon: {
    margin: 8,
  },
  ExpandedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFCE50",
    borderRadius: 10,
  },
  //expanded contents
  expandedView: {
    alignSelf: "stretch",
    alignItems: "stretch",
  },
  dropDownView: {
    backgroundColor: "#FFF4B7", 
    borderRadius: 10, 
    padding: 10, 
    margin: 6, 
    alignSelf: "stretch", 
    aspectRatio: 6.8
  },
  dropDownItem: {
    backgroundColor: "#FFF4B7",
    borderRadius: 10,
    alignSelf: "stretch",
    aspectRatio: 6.8,
  },
  //SUBMIT BUTTON
  submitButton: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    marginTop: 20,
    marginHorizontal: 30,
    padding: 5,
    backgroundColor: "#AF6A03",
    borderRadius: 10,
    elevation: 20,
  }
});
