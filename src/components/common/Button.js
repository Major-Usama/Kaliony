import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={{
        ...styles.btnContainer,
        backgroundColor: props.bg,
        borderWidth: props.bWidth,
        width: props.width,
        borderColor: props.bColor,
      }}
    >
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 55,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  btnText: {
    fontSize: 18,
    lineHeight: 22,
    color: "#fff",
    fontFamily: "SFRegular",
  },
});
