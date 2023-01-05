import { FC } from "react";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "./UI/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  iconName: string;
  error: string | null;
  placeholder: string;
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
  keyboardType,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>
        {label}{" "}
        {(label === "Full Name" ||
          label === "Vehicle Type" ||
          label === "Registration Number" ||
          label === "Chasis Number" ||
          label === "Engine Number") &&
          "*"}
      </Text>
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
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus;
            setIsFocused(true);
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          onBlur={() => {
            onBlur;
            setIsFocused(false);
          }}
          // secureTextEntry={hidePassword}
          style={{ color: COLORS.black, flex: 1 }}
        />

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
