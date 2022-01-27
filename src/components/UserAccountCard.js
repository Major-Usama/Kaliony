import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;

export default function UserAccountCard(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.userCardContainer}>
      <View>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardSubTitle}>{props.subtitle}</Text>
      </View>

      <Image
        style={{ width: 8, height: 14, tintColor: "gray" }}
        source={require("../assets/images/products/arrow-right.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  userCardContainer: {
    width: WIDTH - 40,
    height: 80,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#303030",
  },
  cardSubTitle: {
    fontSize: 12,
    fontFamily: "SFRegular",
    color: "#808080",
    marginTop: 9,
  },
});
