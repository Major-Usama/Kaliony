import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FeaturesList() {
  return (
    <View style={styles.featuresListContainer}>
      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Available Device</Text>

        <Text style={styles.listRightText}>Black Red Marbling</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Colour(s)</Text>

        <Text style={styles.listRightText}>Black Armor</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Vape System</Text>

        <Text style={styles.listRightText}>Pod System , Shisha Cloud </Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Charging Time</Text>

        <Text style={styles.listRightText}>2 Hours</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Charging Type</Text>

        <Text style={styles.listRightText}>TYpe C</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>OutPut Power Range</Text>

        <Text style={styles.listRightText}>50 w</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Vaping Inhale Style</Text>

        <Text style={styles.listRightText}>
          DTL (Direct To Lung) , MTL{"\n"}(Mouth To Lung)
        </Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Vape Brands</Text>

        <Text style={styles.listRightText}>SMOK</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Battery Capacity(mAh)</Text>

        <Text style={styles.listRightText}>1800 mAh</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Pod Capacity</Text>

        <Text style={styles.listRightText}>4.5ml, 4ml</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Coil Resistance (oHm)</Text>

        <Text style={styles.listRightText}>0.6 Ohm, 0.23ohm</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Airflow</Text>

        <Text style={styles.listRightText}>Adjustable</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Warranty</Text>

        <Text style={styles.listRightText}>6 Months (Limited)</Text>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.listLeftText}>Battery Type</Text>

        <Text style={styles.listRightText}>Integrated (Built-in)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  featuresListContainer: {},
  featuresList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 43,
  },
  listLeftText: {
    fontSize: 13,
    color: "#717171",
    fontFamily: "SFMedium",
  },

  listRightText: {
    fontSize: 13,
    color: "#638FE2",
    fontFamily: "SFMedium",
  },
});
