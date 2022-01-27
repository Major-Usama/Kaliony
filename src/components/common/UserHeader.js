import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function UserHeader(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.notificationHeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={props.back} style={{ width: 13, height: 23 }} />
        </TouchableOpacity>
        <View />

        <Image
          source={require("../../assets/icons/logo.png")}
          style={{ width: 106, height: 44, marginLeft: 40 }}
        />

        <View style={styles.homeHeaderRightContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeWalletScreen")}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("../../assets/icons/wallet.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationsScreen")}
          >
            <Image
              style={{ width: 28, height: 27 }}
              source={require("../../assets/icons/bell.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userPersonalInfoContainer}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../assets/images/eduard.png")}
        />

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.userName}>Eduard Terakyan</Text>

          <Text style={styles.idText}>ID: 11122254</Text>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.idText}>
              Bonus:{" "}
              <Text
                style={{
                  ...styles.idText,
                  fontFamily: "SFBold",
                  color: "#5184E5",
                }}
              >
                12 500
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  userPersonalInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 25,
  },

  userName: {
    fontSize: 20,
    color: "#303030",
    fontFamily: "SFBold",
  },
  idText: {
    fontSize: 14,
    fontFamily: "SFregular",
    color: "#808080",
  },
  useraccountCardsMainContainer: {
    marginTop: 41,
  },
});
