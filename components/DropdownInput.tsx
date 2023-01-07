import { FC } from "react";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "./UI/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";

interface Props {
  label: string;
  iconName: string;
  error: string | null;
  placeholder: string;
  data: any;
  keyboardType?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input: FC<Props> = ({
  label,
  iconName,
  error,
  placeholder,
  data,
  keyboardType,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label} {label==="Vehicle Type" && "*"}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.yellow
              : COLORS.light,
            alignItems: "center",
          },
        ]}
      >
        <Ionicons
          name={iconName}
          style={{ color: COLORS.yellow, fontSize: 24, marginRight: 10 }}
        />
        <SelectDropdown
          search={true}
          searchPlaceHolder="Search"
          renderSearchInputLeftIcon={() => {
            return (
              <MaterialIcons name="search" size={20} color={COLORS.grey} />
            );
          }}
          searchInputStyle={{
            backgroundColor: COLORS.lightBrown
          }}
          statusBarTranslucent={true}
          renderDropdownIcon={() => {
            return (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color={COLORS.black}
              />
            );
          }}
          dropdownOverlayColor="transparent"
          dropdownStyle={{ backgroundColor: COLORS.light, borderRadius: 8 }}
          buttonStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.light,
            paddingHorizontal: 0,
          }}
          buttonTextStyle={{
            color: COLORS.black,
            fontSize: 14,
            textAlign: "left",
            marginHorizontal: 0,
          }}
          rowTextStyle={{
            textAlign: "left",
          }}
          onFocus={() => {
            onFocus;
            setIsFocused(true);
          }}
          onBlur={() => {
            onBlur;
            setIsFocused(false);
          }}
          data={data}
          onSelect={(selectedItem, index) => {
            onChangeText(selectedItem);
            // selectedItem ? onChangeText(selectedItem) : onChangeText("");
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          defaultButtonText={placeholder}
        />
        {/* <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus;
            setIsFocused(true);
          }}
          placeholder={placeholder}
          keyboardType = {keyboardType}
          onChangeText={onChangeText}
          
          onBlur={() => {
            onBlur;
            setIsFocused(false)}}
          // secureTextEntry={hidePassword}
          style={{color: COLORS.black, flex: 1}}
        /> */}

        {/* <MaterialIcons
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          /> */}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.darkBrown,
  },
  inputContainer: {
    height: 60,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderRadius: 10,
  },
});

export default Input;
