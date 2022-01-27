import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import CompareItem from "../components/CompareItem";

export default function ProductDetailsCompareScreen({navigation}) {
  const [search, setSearch] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.homeHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 13, height: 23, marginLeft: 27, marginRight: 10 }}
              source={require("../assets/icons/arrow-back.png")}
            />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
              style={styles.input}
              onChangeText={setSearch}
              value={search}
            />

            <TouchableOpacity
              style={{ right: 26, zIndex: 999999 }}
              onPress={() => setSearch("")}
            >
              <Image
                style={styles.crossIcon}
                source={require("../assets/icons/close.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.homeHeaderRightContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeWalletScreen")}
            >
              <Image
                style={{ width: 30, height: 30, marginRight: 10 }}
                source={require("../assets/icons/wallet.png")}
              />
            </TouchableOpacity>

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

        <View style={styles.compareItemsContainer}>
          <CompareItem
            title1="SMOK Nord"
            title2={"50w Kit"}
            image={require("../assets/images/products/p1.jpg")}
            price={"21500 ֏"}
            value={3.5}
            f1="Black Red Marbling"
            f2="Black Armor"
            f3="Pod System , Shisha Cloud "
            f4="2 Hours"
            f5="Type C"
            f6="50w"
            f7="DTL (Direct To Lung) MTL "
            f8="(Mouth To Lung)"
            f9="SMOK"
            f10="1800 mAh"
            f11="4.5ml, 4ml"
            f12="0.6 Ohm, 0.23ohm"
            f13="6 Months (Limited)"
            f14="Integrated (Built-in)"
          />
          <CompareItem
            title1="KALONY"
            title2={"-TRAVEL KIT"}
            image={require("../assets/images/products/p2.jpg")}
            price={"15000 ֏"}
            value={3}
            f1="Black , Rainbow , Blue"
            f2="Pod System"
            f3="45 Minutes"
            f4="Micro USB Cable"
            f5="10w"
            f6="MTL (Mouth To Lung)"
            f7="Kaliony "
            f8=""
            f9="320mAh"
            f10="1.6ml"
            f11="1.3 Ohm , 1.3 Ohm"
            f12="6 Months (Limited)"
            f13="Integrated (Built-in)"
            f14="Integrated (Built-in)"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },

  input: {
    width: 204,
    height: 36,
    borderRadius: 10,
    paddingHorizontal: 36,
    fontSize: 14,
    fontFamily: "SFBold",
    color: "rgba(60, 60, 67, 0.6)",
    backgroundColor: "rgba(250, 250, 250, 0.93)",
  },

  crossIcon: {
    width: 18,
    height: 18,
    zIndex: 9999,
  },

  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 0 : 20,
  },

  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  compareItemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    marginTop: 15,
  },
});
