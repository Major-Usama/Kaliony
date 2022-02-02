import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const WIDTH = Dimensions.get("window").width;

export default function ShippingAddressScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.notificationHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/icons/arrow-back.png")}
              style={{ width: 13, height: 23 }}
            />
          </TouchableOpacity>

          <Image
            source={require("../assets/icons/logo.png")}
            style={{ width: 106, height: 44 }}
          />

          <View style={styles.homeHeaderRightContainer}>
          <View style={{marginRight:20,}} />
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("HomeWalletScreen")}
            >
              <Image
                style={{ width: 30, height: 30, marginRight: 10 }}
                source={require("../assets/icons/wallet.png")}
              />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationsScreen")}
            >
              <Image
                style={{ width: 28, height: 27 }}
                source={require("../assets/icons/bell.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 36 }}>
          <View style={styles.useshippingAddressContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#303030" : "#909090"}
            />

            <Text style={styles.useshippingText}>
              Use as the shipping address
            </Text>
          </View>
          <View style={styles.addressBoxContainer}>
            <Text style={styles.customerName}>Eduard Terakyan</Text>

            <View style={styles.seprator1} />

            <View>
              <Text style={styles.adressText}>
                st Sayat Nova 4 ,{"\n"}Yerevan Armenia
              </Text>
            </View>
          </View>
        </View>

        {/* second address */}
        <View style={{ marginTop: 36 }}>
          <View style={styles.useshippingAddressContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked2}
              onValueChange={setChecked2}
              color={isChecked2 ? "#303030" : "#909090"}
            />

            <Text style={styles.useshippingText}>
              Use as the shipping address
            </Text>
          </View>
          <View style={styles.addressBoxContainer}>
            <Text style={styles.customerName}>Sahak Hakobyan</Text>

            <View style={styles.seprator1} />

            <View>
              <Text style={styles.adressText}>
                25 rue Robert Latouche, Nice, 06200, Côte D’azur,{"\n"}France
              </Text>
            </View>
          </View>
        </View>

        {/* third address */}
        <View style={{ marginTop: 36 }}>
          <View style={styles.useshippingAddressContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked3}
              onValueChange={setChecked3}
              color={isChecked3 ? "#303030" : "#909090"}
            />

            <Text style={styles.useshippingText}>
              Use as the shipping address
            </Text>
          </View>
          <View style={styles.addressBoxContainer}>
            <Text style={styles.customerName}>John Cellar</Text>

            <View style={styles.seprator1} />

            <View>
              <Text style={styles.adressText}>
                25 rue Robert Latouche, Nice, 06200, Côte D’azur,{"\n"}France
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  notificationHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop:Platform.OS==='android'?0:20
  },
  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  useshippingAddressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  checkbox: {
    margin: 8,
  },

  useshippingText: {
    fontSize: 18,
    fontFamily: "SFRegular",
    color: "#808080",
    marginLeft: 8,
  },
  addressBoxContainer: {
    width: WIDTH - 40,
    padding: 4,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingBottom: 15,
  },

  customerName: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#303030",
    paddingLeft: 20,
    paddingTop: 15,
  },

  seprator1: {
    width: WIDTH - 40,
    height: 2,
    backgroundColor: "#F0F0F0",
    marginTop: 14,
  },
  adressText: {
    fontSize: 14,
    color: "#808080",
    fontFamily: "SFRegular",
    lineHeight: 25,
    marginLeft: 20,
    marginTop: 10,
  },
});
