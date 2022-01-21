import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { AntDesign } from "@expo/vector-icons";

export default function Textinputs(props) {
  return (
    <View>
      <FloatingLabelInput
        isPassword={props.password}
        customShowPasswordComponent={
          <AntDesign name="eye" size={24} color="black" />
        }
        customHidePasswordComponent={
          <AntDesign name="eyeo" size={24} color="black" />
        }
        containerStyles={styles.inputContainerStyle}
        inputStyles={styles.input}
        customLabelStyles={{
          colorFocused: "#000",
          fontSizeFocused: 12,
          fontSizeBlurred: 16,
          colorBlurred: "#222222",
        }}
        labelStyles={{
          color: "#000",
          paddingHorizontal: 10,
          fontFamily: "SFRegular",
        }}
        label={props.label}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    paddingHorizontal: 10,
    height: 64,
    width: 295,
    borderRadius: 15,
    paddingTop: 5,
    marginBottom: 16,
    paddingRight: 20,
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#222222",
    fontFamily: "SFBold",
  },
});
