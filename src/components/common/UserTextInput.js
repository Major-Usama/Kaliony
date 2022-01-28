import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { AntDesign } from "@expo/vector-icons";

export default function UserTextinput(props) {
  return (
    <View>
      <FloatingLabelInput
        keyboardType={props.type}
        isPassword={props.password}
        customShowPasswordComponent={
          <AntDesign name="eye" size={24} color="black" />
        }
        customHidePasswordComponent={
          <AntDesign name="eyeo" size={24} color="black" />
        }
        containerStyles={{ ...styles.inputContainerStyle }}
        inputStyles={styles.input}
        customLabelStyles={{
          colorFocused: "#000",
          fontSizeFocused: 12,
          fontSizeBlurred: 16,
          colorBlurred: "#222222",
        }}
        labelStyles={{
          color: "#000",
          paddingHorizontal: 5,
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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    height: 64,
    width: 295,
    borderRadius: 4,
    paddingTop: 5,
    marginBottom: 16,
    paddingRight: 20,
    shadowColor: "#000",
    marginHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#222222",
    fontFamily: "SFBold",
  },
});
