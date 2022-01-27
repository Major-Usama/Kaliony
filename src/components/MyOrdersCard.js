import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const WIDTH = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";

export default function MyOrdersCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyOrderDetailsScreen", {
          type: props.type,
        })
      }
      activeOpacity={0.7}
      style={styles.myOrderCardContainer}
    >
      <View style={styles.orderNumberContainer}>
        <Text style={styles.ordernumberText}>Order No238562312</Text>

        <Text style={styles.orderDateText}>20/03/2020</Text>
      </View>

      <View style={styles.seprator} />
      <View style={styles.orderNumberContainer}>
        <Text style={{ ...styles.ordernumberText, fontSize: 16 }}>
          <Text style={{ ...styles.ordernumberText, color: "#909090" }}>
            Quantity:
          </Text>{" "}
          03
        </Text>

        <Text
          style={{
            ...styles.orderDateText,
            fontFamily: "SFBold",
            fontSize: 16,
          }}
        >
          Total Amount:{" "}
          <Text
            style={{
              ...styles.orderDateText,
              fontFamily: "SFBold",
              color: "#303030",
            }}
          >
            $150
          </Text>
        </Text>
      </View>

      <View style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 40 }}>
        <Text
          style={{
            ...styles.orderDateText,
            fontFamily: "SFBold",
            color: props.type === "Processing" ? "#8E8E8E" : "#27AE60",
            fontSize: 16,
          }}
        >
          {props.type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  myOrderCardContainer: {
    width: WIDTH - 40,
    height: 172,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignSelf: "center",
    marginBottom: 21,
  },
  orderNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingLeft: 21,
    paddingRight: 14,
  },

  ordernumberText: {
    color: "#303030",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFBold",
  },

  orderDateText: {
    color: "#909090",
    fontFamily: "SFRegular",
    fontSize: 14,
  },
  seprator: {
    width: WIDTH - 40,
    height: 1.5,
    backgroundColor: "#F0F0F0",
    marginTop: 13,
  },
});
