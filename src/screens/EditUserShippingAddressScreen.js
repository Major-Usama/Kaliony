import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import UserTextinput from "../components/common/UserTextInput";
const WIDTH = Dimensions.get("window").width;

export default function EditUserShippingAddressScreen({ navigation }) {
  const [firstName, setFirstName] = React.useState("Eduard");
  const [lastName, setLastName] = React.useState("Terakyan");
  const [country, setCountry] = React.useState("Armenia");
  const [state, setState] = React.useState("Yerevan");
  const [city, setCity] = React.useState("Yerevan");
  const [Address, setAddress] = React.useState("st Sayat Nova 4");
  const [zipcode, setZipCode] = React.useState("0004");
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
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("HomeWalletScreen")}
            >
              <Image
                style={{ width: 30, height: 30, marginRight: 10 }}
                source={require("../assets/icons/wallet.png")}
              />
            </TouchableOpacity> */}
             <View style={{marginRight:20,}} />

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

        <View style={styles.userShippingInputsMainContainer}>
          <View style={styles.userShippingInputsFirstRow}>
            <View style={{ width: 200 }}>
              <UserTextinput
                type="default"
                value={firstName}
                onChangeText={setFirstName}
                label={"First Name"}
                password={false}
              />
            </View>
            <View style={{ width: 200 }}>
              <UserTextinput
                type="default"
                value={lastName}
                onChangeText={setLastName}
                label={"Last Name"}
                password={false}
              />
            </View>
          </View>

          <UserTextinput
            type="default"
            value={country}
            onChangeText={setCountry}
            label={"Country"}
            password={false}
          />

          <UserTextinput
            type="default"
            value={state}
            onChangeText={setState}
            label={"State"}
            password={false}
          />

          <UserTextinput
            type="default"
            value={city}
            onChangeText={setCity}
            label={"City"}
            password={false}
          />

          <UserTextinput
            type="default"
            value={Address}
            onChangeText={setAddress}
            label={"Adress"}
            password={false}
          />

          <UserTextinput
            type="number-pad"
            value={zipcode}
            onChangeText={setZipCode}
            label={"Zip Code"}
            password={false}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserShippingAddressScreen")}
        activeOpacity={0.7}
        style={styles.addAddressButton}
      >
        <Text style={styles.addAddresstext}>SAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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

  userShippingInputsFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 14,
  },
  userShippingInputsMainContainer: {
    marginTop: 51,
  },
  addAddressButton: {
    width: WIDTH - 40,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#5184E5",
    alignSelf: "center",
    bottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addAddresstext: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#fff",
  },
});
