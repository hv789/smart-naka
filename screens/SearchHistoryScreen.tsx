import { View, Text, StyleSheet } from "react-native";

import HistoryItem from "../components/HistoryItem";

const SearchHistoryScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <HistoryItem
        VehicleNumber="UP 93 AD 9876"
        date="10/12/2022"
        time="22:50"
      />
    </View>
  );
};

export default SearchHistoryScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        paddingTop: 20, 
        paddingHorizontal: 20,
        backgroundColor: '#fcf9f7',
    },
});