import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const WIDTH = Dimensions.get("window").width;
export default function ShopAddressCard() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Kaliony Abovyan 21</Text>

      <Text style={styles.addressDesc}>
        email:{"\n"}
        abovyan@kaliony.am{"\n"}
        Phone: +37412700707
      </Text>

      <View style={styles.map}>
        <MapView
          initialRegion={{
            latitude: 40.1772,
            longitude: 44.50349,
          }}
          style={styles.mapView}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: WIDTH - 40,
    paddingTop: 20,
    paddingBottom: 13,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#000",
    marginHorizontal: 23,
  },

  addressDesc: {
    fontSize: 12,
    fontFamily: "SFRegular",
    color: "#000",
    marginHorizontal: 23,
  },
  map: {
    width: WIDTH - 70,
    height: 142,
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
  },

  mapView: {
    width: WIDTH - 70,
    height: 142,
    alignSelf: "center",
  },
});
