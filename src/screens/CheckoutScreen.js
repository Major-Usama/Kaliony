import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
export default function CheckoutScreen({ navigation }) {
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

        <View style={styles.shippingAdressMainContainer}>
          <View style={styles.shiipingAdressTextContainer}>
            <Text style={styles.shippingText}>Shipping Address</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/icons/edit.png")}
            />
          </View>

          <TouchableOpacity
          onPress={()=>navigation.navigate('ShippingAddressScreen')}
            activeOpacity={0.8}
            style={styles.addressBoxContainer}
          >
            <Text style={styles.customerName}>Eduard Terakyan</Text>

            <View style={styles.seprator1} />

            <View>
              <Text style={styles.adressText}>
                st Sayat Nova 4 ,{"\n"}Yerevan Armenia
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Payment */}
        <View style={styles.shippingAdressMainContainer}>
          <View style={styles.shiipingAdressTextContainer}>
            <Text style={styles.shippingText}>Payment</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/icons/edit.png")}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentScreen")}
            activeOpacity={0.8}
            style={{
              ...styles.addressBoxContainer,
              ...styles.paymentContainer,
            }}
          >
            <Image
              style={styles.card}
              source={require("../assets/icons/card.png")}
            />

            <Text style={styles.cardNumber}>**** **** **** 3947</Text>
          </TouchableOpacity>
        </View>

        {/* Shipping method */}
        <View style={styles.shippingAdressMainContainer}>
          <View style={styles.shiipingAdressTextContainer}>
            <Text style={styles.shippingText}>Shipping method</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/icons/edit.png")}
            />
          </View>

          <TouchableOpacity
          onPress={()=>navigation.navigate('ShippingMethodScreen')}
            activeOpacity={0.8}
            style={{
              ...styles.addressBoxContainer,
              ...styles.shppingMethodContainer,
            }}
          >
            <Text style={styles.tomorrowText}>Tomorrow</Text>
          </TouchableOpacity>
        </View>

        {/* Total */}
        <View style={styles.totalAmountContainer}>
          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>Subtotal</Text>

            <Text style={styles.itemAmountText}>21500AMD</Text>
          </View>
          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>shipping</Text>

            <Text style={styles.itemAmountText}>1500AMD</Text>
          </View>

          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>Promocode</Text>

            <Text style={{ ...styles.itemAmountText, color: "#D13B3B" }}>
              -1000AMD
            </Text>
          </View>

          <Image
            style={styles.seprator}
            source={require("../assets/images/sep.png")}
          />
          <View style={{ ...styles.subTotalRow, marginTop: 8 }}>
            <Text style={styles.itemsubtotalText}>Total</Text>

            <Text style={{ ...styles.itemAmountText, color: "#5587E6" }}>
              22500AMD
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 20,
          zIndex: 9999,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckoutScreen")}
          activeOpacity={0.7}
          style={styles.buyNoewButton}
        >
          <Text style={styles.buyNowText}>SUBMIT SCREEN</Text>
        </TouchableOpacity>
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
  },
  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  shippingAdressMainContainer: {
    marginTop: 15,
  },

  shiipingAdressTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  shippingText: {
    fontSize: 18,
    color: "#909090",
    fontFamily: "SFBold",
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

  card: {
    width: 92,
    height: 44,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardNumber: {
    fontSize: 14,
    color: "#222222",
    fontFamily: "SFBold",
  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },

  shppingMethodContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  tomorrowText: {
    fontSize: 14,
    color: "#5587E6",
    fontFamily: "SFBold",
    paddingTop: 15,
    paddingBottom: 5,
  },

  totalAmountContainer: {
    width: WIDTH - 40,
    marginBottom: 80,
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignSelf: "center",
    marginTop: 20,
    paddingTop: 14,
  },
  itemsubtotalText: {
    fontSize: 18,
    color: "#909090",
    fontFamily: "SFReagular",
  },

  itemAmountText: {
    fontSize: 18,
    color: "#303030",
    fontFamily: "SFBold",
  },

  subTotalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  seprator: {
    width: WIDTH - 60,
    height: 6,
    alignSelf: "center",
    marginTop: 10,
  },

  buyNoewButton: {
    width: WIDTH - 40,
    height: 50,
    backgroundColor: "#4467AA",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  buyNowText: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#fff",
  },
});
