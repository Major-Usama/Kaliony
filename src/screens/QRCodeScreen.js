import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function QRCodeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 13, height: 23, marginHorizontal: 27, marginTop: 5 }}
          source={require("../assets/icons/arrow-back.png")}
        />
      </TouchableOpacity>

      <View style={styles.qrCodeContainer}>
        <Image
          style={styles.qrCodeImage}
          source={require("../assets/images/qr.png")}
        />
      </View>

      <View style={styles.yourBonusqrCodeContainer}>
        <Text style={styles.bonusqrText}>
          {" "}
          <Text style={{ ...styles.bonusqrText, fontFamily: "SFRegular" }}>
            Your Bonus{" "}
          </Text>
          QR Code
        </Text>
      </View>

      <View style={styles.qrIDContainer}>
        <Text style={styles.bonusqrText}>
          {" "}
          <Text style={{ ...styles.bonusqrText, fontFamily: "SFRegular" }}>
            ID:{" "}
          </Text>
          378954
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#ffff",
  },

  qrCodeImage: {
    width: 260,
    height: 260,
  },

  qrCodeContainer: {
    width: 262,
    height: 262,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginTop: 130,
  },
  yourBonusqrCodeContainer: {
    width: 262,
    height: 51,
    backgroundColor: "#F2ECEC",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  bonusqrText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "SFBold",
  },

  qrIDContainer: {
    width: 262,
    height: 51,
    backgroundColor: "#E3E3E3",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
