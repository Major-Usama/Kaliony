import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from "react-native";

import React from "react";
const WIDTH = Dimensions.get("window").width;
export default function ShippingMethodScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.shippingMethodContainer}>
        <Text style={styles.todaytext}>Today</Text>

        <Image
          style={{ width: 120, height: 7 }}
          source={require("../assets/icons/shipline.png")}
        />

        <Text style={styles.todaytext}>1500AMD</Text>
      </View>

      <View
        style={{
          ...styles.shippingMethodContainer,
          backgroundColor: "#fff",
          marginTop: 15,
        }}
      >
        <Text style={styles.todaytext2}>Tomorrow</Text>

        <Image
          style={{ width: 70, height: 4 }}
          source={require("../assets/icons/shipline.png")}
        />

        <Text style={styles.todaytext2}>1000AMD</Text>
      </View>
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
    marginBottom: 75,
    marginTop:Platform.OS==='android'?0:20
  },
  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  shippingMethodContainer: {
    width: WIDTH - 40,
    height: 65,
    backgroundColor: "#DADADA",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  todaytext: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#000",
  },
  todaytext2: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#5184E5",
  },
});
