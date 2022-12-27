import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  LocalAlertItem from './components/LocalAlertItem';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is not the final home screen or any screen. this is just for testing of components...</Text>
      <LocalAlertItem
       VehicleNumber="UP 93 AD 9876"
       date="10/12/2022"
       time="22:50" 
      />
      <LocalAlertItem
       VehicleNumber="UP 93 AD 9876"
       date="10/12/2022"
       time="22:50" 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE2D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
