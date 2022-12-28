import { View, Text, StyleSheet } from 'react-native';

import LocalAlertsItem from "../components/LocalAlertsItem";

const LocalAlertsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <LocalAlertsItem
        VehicleNumber="UP 93 AD 9876"
        date="10/12/2022"
        time="22:50"
      />
      <LocalAlertsItem
        VehicleNumber="UP 93 AD 9876"
        date="10/12/2022"
        time="22:50"
      />
    </View>
  );
};

export default LocalAlertsScreen;

const styles = StyleSheet.create({
  rootContainer: {
      flex: 1, 
      paddingTop: 20, 
      paddingHorizontal: 15,
      backgroundColor: '#fcf9f7',
  },
});