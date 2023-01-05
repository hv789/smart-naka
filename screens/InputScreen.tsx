// import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  Pressable,
  StyleSheet,
} from "react-native";

import COLORS from "../components/UI/colors";
import Input from "../components/Input";
import DropdownInput from "../components/DropdownInput";
import Loader from "../components/Loader";

const vehicleTypes = [
  "AMBULANCE",
  "AUTO RICKSHAW",
  "BUS",
  "CAR",
  "JEEP",
  "LORRY",
  "MINI BUS",
  "MOPED",
  "MOTOR BOAT",
  "MOTOR CYCLE",
  "ROAD ROLLER",
  "SCOOTER",
  "STATION WAGON",
  "TANKER",
  "TEMPO",
  "TRACTOR",
  "TRUCK",
  "VAN",
  "EARTH MOVER",
  "MOBILE CRANE",
  "TRAILER",
  "MISCELLANEOUS",
  "THREE WHEELER",
  "LGVGOODS",
  "E_RICKSHAW",
  "E_CAR",
  "E_BIKE",
  "E_AUTORICKSHAW",
];

interface inputParams {
  fullName: string | null;
  vehicleType: string | null;
  registrationNumber: string | null;
  chasisNumber: string | null;
  engineNumber: string | null;
}

const RegistrationScreen = ({ navigation }: { navigation: any }) => {
  const [inputs, setInputs] = React.useState<inputParams>({
    fullName: "",
    vehicleType: "",
    registrationNumber: "",
    chasisNumber: "",
    engineNumber: "",
  });
  const [errors, setErrors] = React.useState<inputParams>({
    fullName: null,
    vehicleType: null,
    registrationNumber: null,
    chasisNumber: null,
    engineNumber: null,
  });
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    // console.log("inputs", inputs);

    if (inputs.fullName === "") {
      handleError("Please input full name", "fullName");
      isValid = false;
    }

    if (inputs.vehicleType === "") {
      handleError("Please select vehicle type", "vehicleType");
      isValid = false;
    }

    if (inputs.registrationNumber === "") {
      handleError("Please enter registration number", "registrationNumber");
      isValid = false;
    }

    if (inputs.chasisNumber === "") {
      handleError("Please enter chasis number", "chasisNumber");
      isValid = false;
    }

    if (inputs.engineNumber === "") {
      handleError("Please enter engine number", "engineNumber");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        fetch(
          "http://universities.hipolabs.com/search?country=United+States",
          {}
        );
        // AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate("DetailsScreen");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  //   const handleOnchange = (text: any, input: any) => {
  //     setInputs(prevState => ({...prevState, [input]: text}));
  //   };
  //   const handleError = (error: any, input: any) => {
  //     console.log('errors', errors);
  //     setErrors(prevState => ({...prevState, [input]: error}));
  //   };

  const handleError = (error: any, input: any) => {
    if (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [input]: error }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [input]: null }));
    }
  };

  const handleOnchange = (text: any, input: any) => {
    setErrors((prevErrors) => ({ ...prevErrors, [input]: null }));
    setInputs((prevInputs) => ({ ...prevInputs, [input]: text }));
  };

  const handleBlur = (input: any) => {
    setErrors((prevErrors) => ({ ...prevErrors, [input]: null }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightBrown, flex: 1 }}>
      {/* <Loader visible={loading} /> */}
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text
          style={{ color: COLORS.darkBrown, fontSize: 40, fontWeight: "bold" }}
        >
          Search
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 20, marginVertical: 10 }}>
          Enter Vehicle Details to Search
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            //onChangeText={text => handleOnchange.bind(text,'fullName')}
            // onChangeText={({ text }:{text:any}) => handleOnchange.bind(text, 'fullName')}
            //onFocus={() => handleError.bind(null, 'fullName')}
            //onChangeText={text => handleOnchange(text, 'fullName')}
            onFocus={() => handleError(null, "fullName")}
            //onBlur={() => handleBlur('fullName')}
            onBlur={() =>
              handleError(
                inputs.fullName ? null : "Please input full name",
                "fullName"
              )
            }
            onChangeText={(text) => handleOnchange(text, "fullName")}
            iconName="person"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullName}
          />

          <DropdownInput
            //   onChangeText={text => handleOnchange.bind(text, 'vehicleType')}
            //     // onChangeText={({ text }:{text:any}) => handleOnchange.bind(text, 'vehicleType')}
            //     onFocus={() => handleError.bind(null, 'vehicleType')}
            //onChangeText={text => handleOnchange(text, 'vehicleType')}
            onFocus={() => handleError(null, "vehicleType")}
            //onBlur={() => handleBlur('vehicleType')}
            onBlur={() =>
              handleError(
                inputs.vehicleType ? null : "Please select vehicle type",
                "vehicleType"
              )
            }
            onChangeText={(text) => handleOnchange(text, "vehicleType")}
            iconName="car"
            label="Vehicle Type"
            placeholder="Select your vehicle type"
            error={errors.vehicleType}
            data={vehicleTypes}
          />

          <Input
            // keyboardType="numeric"
            // onChangeText={text => handleOnchange.bind(text, 'phone')}
            // // onChangeText={({ text }:{text:any}) => handleOnchange.bind(text, 'phone')}
            // onFocus={() => handleError.bind(null, 'phone')}
            //onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, "registrationNumber")}
            //onBlur={() => handleBlur('phone')}
            onBlur={() =>
              handleError(
                inputs.registrationNumber
                  ? null
                  : "Please enter registration number",
                "registrationNumber"
              )
            }
            onChangeText={(text) => handleOnchange(text, "registrationNumber")}
            iconName="pencil"
            label="Registration Number"
            placeholder="Enter your registration number"
            error={errors.registrationNumber}
          />

          <Input
            //   onChangeText={text => handleOnchange.bind(text, 'password')}
            //     // onChangeText={({ text }:{text:any}) => handleOnchange.bind(text, 'password')}
            //     onFocus={() => handleError.bind(null, 'password')}
            //onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, "engineNumber")}
            //onBlur={() => handleBlur('password')}
            onBlur={() =>
              handleError(
                inputs.chasisNumber ? null : "Please enter chasis number",
                "chasisNumber"
              )
            }
            onChangeText={(text) => handleOnchange(text, "chasisNumber")}
            iconName="ios-construct"
            label="Chasis Number"
            placeholder="Enter your chasis number"
            error={errors.chasisNumber}
            // password
          />

          <Input
            //   onChangeText={text => handleOnchange.bind(text, 'password')}
            //     // onChangeText={({ text }:{text:any}) => handleOnchange.bind(text, 'password')}
            //     onFocus={() => handleError.bind(null, 'password')}
            //onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, "chasisNumber")}
            //onBlur={() => handleBlur('password')}
            onBlur={() =>
              handleError(
                inputs.engineNumber ? null : "Please enter engine number",
                "engineNumber"
              )
            }
            onChangeText={(text) => handleOnchange(text, "engineNumber")}
            iconName="cog"
            label="Engine Number"
            placeholder="Enter your engine number"
            error={errors.engineNumber}
            // password
          />

          <View style={styles.container}>
            <Text style={styles.searchButton} onPress={validate}>
              {/* <Text>Search</Text> */}
              Search
            </Text>

            {/* icon={<MaterialIcons name="search" size={85} color="#926900" />} */}

            <Text
              onPress={() => navigation.navigate("ASInputScreen")}
              style={{
                color: COLORS.brown,
                fontWeight: "600",
                textAlign: "center",
                fontSize: 16,
                marginVertical: 18,
              }}
            >
              Advanced Search
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchButton: {
    backgroundColor: COLORS.yellow,
    // backgroundColor: COLORS.darkBrown2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 16,
    fontSize: 24,
    textAlign: "center",
    color: COLORS.brown,
    fontWeight: "600",
    width: "70%",
    // marginHorizontal: 20,
  },
});
