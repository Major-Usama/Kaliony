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
import UserHeader from "../components/common/UserHeader";

export default function UserAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <UserHeader
          // back={require('../assets/icons/arrow-back.png')}
          back=""
        />

        <View style={styles.useraccountCardsMainContainer}>
          <UserAccountCard
          onPress={()=>navigation.navigate('MyOrdersScreen')}
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

  useraccountCardsMainContainer: {
    marginTop: 41,
  },
});
