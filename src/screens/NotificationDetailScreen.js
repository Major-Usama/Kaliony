import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
export default function NotificationDetailScreen({ navigation, route }) {
  const { title } = route.params;
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
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeWalletScreen")}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("../assets/icons/wallet.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
          // onPress={() => navigation.navigate("NotificationsScreen")}
          >
            <Image
              style={{ width: 28, height: 27 }}
              source={require("../assets/icons/bellblue.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.Subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit{"\n"}Turpis
        pretium et in arcu adipiscing nec. Turpis pretium et{"\n"}in arcu
        adipiscing nec.Turpis pretium et in arcu adipiscing{"\n"}nec.
      </Text>

      <Image
        style={styles.saleImage}
        source={require("../assets/images/sale.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  notificationHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    color: "#303030",
    fontFamily: "SFBold",
    textAlign: "center",
    marginTop: 37,
  },

  Subtitle: {
    fontSize: 14,
    color: "#808080",
    textAlign: "left",
    fontFamily: "SFRegular",
    alignSelf: "center",
    marginTop: 25,
  },

  saleImage: {
    width: WIDTH - 44,
    height: 331,
    alignSelf: "center",
    marginTop: 25,
  },
});
