import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import DatePickerr from "../components/DatePicker";
const WIDTH = Dimensions.get("window").width;
export default function PaymentScreen({ navigation }) {
  const [cardNuber, setCardNumber] = useState("**** **** **** 3456");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
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

        <View>
          <ImageBackground
            source={require("../assets/images/creditcard.png")}
            style={styles.creditCardImageContainer}
          >
            <Text style={styles.cardNumberText}>
              * * * * * * * * * * * * XXXX
            </Text>

            <View style={styles.nameDateContainer}>
              <View>
                <Text style={styles.nametitle}>Card Holder Name</Text>
                <Text style={styles.nametext}>Eduard Terakyan</Text>
              </View>

              <View>
                <Text style={styles.nametitle}>Expiry Date</Text>
                <Text style={styles.nametext}>XX/XX</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.cardHolderNameContainer}>
          <Text style={styles.cardholderTitle}>CardHolder Name</Text>

          <Text style={styles.cardNametext}>Ex: Eduard Terakyan</Text>
        </View>

        <View style={{ width: WIDTH - 40, alignSelf: "center", marginTop: 20 }}>
          <FloatingLabelInput
            maxLength={19}
            label={"Card Number"}
            containerStyles={styles.inputContainerStyle}
            inputStyles={styles.input}
            customLabelStyles={{
              colorFocused: "#000",
              fontSizeFocused: 12,
              fontSizeBlurred: 16,
              colorBlurred: "#222222",
            }}
            labelStyles={{
              color: "#000",
              paddingHorizontal: 10,
              fontFamily: "SFRegular",
              top: 10,
            }}
            value={cardNuber}
            onChangeText={(value) => setCardNumber(value)}
          />
        </View>

        <View style={styles.cvvDateMainContainer}>
          <View
            style={{
              ...styles.cardHolderNameContainer,
              width: 157,
              alignSelf: "flex-start",
              marginTop: 0,
            }}
          >
            <Text style={{ ...styles.cardholderTitle, color: "#828282" }}>
              CVV
            </Text>

            <Text style={styles.cardNametext}>Ex:123</Text>
          </View>

          <View
            style={{
              ...styles.inputContainerStyle,
              width: 157,
              marginBottom: 0,
            }}
          >
            <Text style={{ ...styles.cardholderTitle, color: "#828282" }}>
              Expiration Date
            </Text>

            <DatePickerr />
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
          <Text style={styles.buyNowText}>Confirm</Text>
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
    marginTop: Platform.OS === "android" ? 0 : 20,
  },
  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  creditCardImageContainer: {
    width: WIDTH - 20,
    height: 190,
    alignSelf: "center",
    marginTop: 66,
  },
  cardNumberText: {
    fontSize: 20,
    fontFamily: "SFRegular",
    color: "#fff",
    letterSpacing: 1.4,
    marginTop: 62,
    marginLeft: 25,
  },
  nametitle: {
    fontSize: 14,
    fontFamily: "SFRegular",
    color: "#fff",
  },

  nametext: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "SFRegular",
    marginTop: 5,
  },

  nameDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 35,
    marginTop: 30,
  },
  cardHolderNameContainer: {
    width: WIDTH - 40,
    height: 66,
    backgroundColor: "#F7F7F7",
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 40,
  },
  cardholderTitle: {
    fontFamily: "SFRegular",
    lineHeight: 14,
    color: "#828282",
    fontSize: 12,
    marginLeft: 16,
    marginTop: 12,
  },
  cardNametext: {
    fontSize: 16,
    fontFamily: "SFBold",
    lineHeight: 20,
    color: "#BDBDBD",
    marginTop: 10,
    marginLeft: 16,
  },
  inputContainerStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 10,
    height: 64,
    borderRadius: 4,
    marginBottom: 16,
    paddingRight: 20,
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#222222",
    fontFamily: "SFBold",
    top: 7,
  },

  cvvDateMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 7,
  },
  buyNoewButton: {
    width: WIDTH - 40,
    height: 50,
    backgroundColor: "#5587E6",
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
