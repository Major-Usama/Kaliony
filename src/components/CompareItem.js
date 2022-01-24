import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Stars from "react-native-stars";

export default function CompareItem(props) {
  return (
    <View style={styles.compareItemContainer}>
      <View>
        <Image source={props.image} style={styles.productImage} />

        <Text style={styles.productTitle}>
          {props.title1}
          {"\n"}
          {props.title2}
        </Text>

        <Text style={{ ...styles.productPriceText }}>{props.price}</Text>

        <View style={{ marginTop: 6 }}>
          <Stars
            default={props.value}
            count={5}
            half={true}
            starSize={50}
            fullStar={
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../assets/images/products/fill.png")}
              />
            }
            emptyStar={
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../assets/images/products/empty.png")}
              />
            }
            halfStar={
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../assets/images/products/half.png")}
              />
            }
          />
        </View>
      </View>

      <View styles={styles.featuresList}>
        <Text style={styles.featureText}>Features</Text>

        <Text style={styles.listRightText}>{props.f1}</Text>
        <Text style={styles.listRightText}>{props.f2}</Text>
        <Text style={styles.listRightText}>{props.f3}</Text>
        <Text style={styles.listRightText}>{props.f4}</Text>
        <Text style={styles.listRightText}>{props.f5}</Text>
        <Text style={styles.listRightText}>{props.f6}</Text>
        <Text style={styles.listRightText}>{props.f7}</Text>
        <Text style={styles.listRightText}>{props.f8}</Text>
        <Text style={styles.listRightText}>{props.f9}</Text>
        <Text style={styles.listRightText}>{props.f10}</Text>
        <Text style={styles.listRightText}>{props.f11}</Text>
        <Text style={styles.listRightText}>{props.f12}</Text>
        <Text style={styles.listRightText}>{props.f13}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productTitle: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#000",
    textAlign: "center",
  },

  productPriceText: {
    color: "#979797",
    fontSize: 24,
    fontFamily: "SFBold",
    textAlign: "center",
    marginTop: 10,
  },

  productImage: {
    width: 160,
    height: 160,
    alignSelf: "center",
  },
  listRightText: {
    fontSize: 13,
    color: "#638FE2",
    fontFamily: "SFMedium",
    textAlign: "center",
  },

  featureText: {
    fontSize: 18,
    fontFamily: "SFMedium",
    color: "#000",
    textAlign: "center",
    right: 7,
    marginTop: 33,
    marginBottom: 17,
  },
});
