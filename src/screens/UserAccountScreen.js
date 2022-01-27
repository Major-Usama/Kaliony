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
  ScrollView,
} from "react-native";

import React from "react";
import UserAccountCard from "../components/UserAccountCard";

export default function UserAccountScreen({navigation}) {
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

        <View style={styles.userPersonalInfoContainer}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("../assets/images/eduard.png")}
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

        <View style={styles.useraccountCardsMainContainer}>
          <UserAccountCard
            title="My orders"
            subtitle="Already have 10 orders"
          />

          <UserAccountCard title="Shipping Adresses" subtitle="03 Addresses" />

          <UserAccountCard title="My reviews" subtitle="reviews for 5 items" />

          <UserAccountCard
            title="Settings"
            subtitle="Notification, Password, Languadge"
          />

          <UserAccountCard title="Shop Adresses" subtitle="Yerevan,Armenia" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    flex: 1,
    backgroundColor: "#ffff",
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
