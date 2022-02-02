import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import UserHeader from "../components/common/UserHeader";
import ShopAddressCard from "../components/ShopAddressCard";

export default function ShopAdressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <UserHeader back={require("../assets/icons/arrow-back.png")} />

        <View style={styles.shopAdressCardContainer}>
          <ShopAddressCard />
          <ShopAddressCard />
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
  shopAdressCardContainer: {
    marginTop: 70,
  },
});
