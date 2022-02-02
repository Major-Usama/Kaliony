import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import UserHeader from "../components/common/UserHeader";
import UserTextinput from "../components/common/UserTextInput";
import SwitchCustom from "expo-custom-switch";

const WIDTH = Dimensions.get("window").width;
export default function UserSettingsScreen({ navigation }) {
  const [firstName, setFirstName] = React.useState("Eduard");
  const [lastName, setLastName] = React.useState("Terakyan");
  const [email, setEmail] = React.useState("edoterakyan@gmail.com");
  const [phone, setPhone] = React.useState("+374 10 50 10");

  const [svalue1, setSValue1] = React.useState(false);
  const [svalue2, setSValue2] = React.useState(false);
  const [svalue3, setSValue3] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <UserHeader back={require("../assets/icons/arrow-back.png")} />

        <Text style={styles.personalInfoText}>Personal Information</Text>

        <View style={styles.userShippingInputsMainContainer}>
          <View style={styles.userShippingInputsFirstRow}>
            <View style={{ width: 220 }}>
              <UserTextinput
                type="default"
                value={firstName}
                onChangeText={setFirstName}
                label={"First Name"}
                password={false}
              />
            </View>
            <View style={{ width: 220 }}>
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
            value={email}
            onChangeText={setEmail}
            label={"Email"}
            password={false}
          />

          <UserTextinput
            type="number-pad"
            value={phone}
            onChangeText={setPhone}
            label={"Phone"}
            password={false}
          />

          <TouchableOpacity
            // onPress={() => navigation.navigate("UserShippingAddressScreen")}
            activeOpacity={0.7}
            style={styles.addAddressButton}
          >
            <Text style={styles.addAddresstext}>SAVE</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.personalInfoText}>Password</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsChangePasswordScreen")}
          style={styles.settingsPasswordContainer}
          activeOpacity={0.7}
        >
          <View>
            <Text style={styles.changePasswordText}>Change Password</Text>

            <Text style={styles.passwordhash}>***************</Text>
          </View>

          <Image
            style={{ width: 8, height: 14, tintColor: "#909090" }}
            source={require("../assets/images/products/arrow-right.png")}
          />
        </TouchableOpacity>

        <View style={styles.settingsnotificationMainContainer}>
          <Text
            style={{
              ...styles.personalInfoText,
              marginTop: 37,
              marginBottom: 12,
            }}
          >
            Notifications
          </Text>

          <View style={styles.notificationContainer}>
            <Text style={styles.salesText}>Sales</Text>
            <View style={{ width: svalue1 === true ? 65 : 60 }}>
              <SwitchCustom
                value={svalue1}
                onChange={(value) => setSValue1(value)}
                leftColor="#2AA952"
                rightColor="#9B9B9B"
                iconLeft={{
                  name: "",
                }}
                iconRight={{
                  name: "",
                  color: "#fff",
                }}
              />
            </View>
          </View>

          <View style={styles.notificationContainer}>
            <Text style={styles.salesText}>New arrivals</Text>
            <View style={{ width: svalue2 === true ? 65 : 60 }}>
              <SwitchCustom
                value={svalue2}
                onChange={(value) => setSValue2(value)}
                leftColor="#2AA952"
                rightColor="#9B9B9B"
                iconLeft={{
                  name: "",
                }}
                iconRight={{
                  name: "",
                  color: "#fff",
                }}
              />
            </View>
          </View>

          <View style={styles.notificationContainer}>
            <Text style={styles.salesText}>Delivery status changes</Text>
            <View style={{ width: svalue3 === true ? 65 : 60 }}>
              <SwitchCustom
                value={svalue3}
                onChange={(value) => setSValue3(value)}
                leftColor="#2AA952"
                rightColor="#9B9B9B"
                iconLeft={{
                  name: "",
                }}
                iconRight={{
                  name: "",
                  color: "#fff",
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.settingsContainer}>
          <Text style={styles.personalInfoText}>Settings</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("SettingsCountryScreen")}
            style={styles.settingsPasswordContainer}
            activeOpacity={0.7}
          >
            <View>
              <Text style={styles.salesText}>Country</Text>
            </View>

            <Image
              style={{ width: 8, height: 14, tintColor: "#909090" }}
              source={require("../assets/images/products/arrow-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SettingsLanguageScreen")}
            style={styles.settingsPasswordContainer}
            activeOpacity={0.7}
          >
            <View>
              <Text style={styles.salesText}>Language</Text>
            </View>

            <Image
              style={{ width: 8, height: 14, tintColor: "#909090" }}
              source={require("../assets/images/products/arrow-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingsPasswordContainer}
            activeOpacity={0.7}
          >
            <View>
              <Text style={styles.salesText}>Privacy & Terms</Text>
            </View>

            <Image
              style={{ width: 8, height: 14, tintColor: "#909090" }}
              source={require("../assets/images/products/arrow-right.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  personalInfoText: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#909191",
    marginLeft: 20,
    marginTop: 25,
  },
  userShippingInputsFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 14,
  },
  userShippingInputsMainContainer: {
    marginTop: 30,
  },
  addAddressButton: {
    width: WIDTH - 40,
    height: 64,
    borderRadius: 35,
    backgroundColor: "#5184E5",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  addAddresstext: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#fff",
  },
  settingsPasswordContainer: {
    width: WIDTH - 40,
    height: 64,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignSelf: "center",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  changePasswordText: {
    fontSize: 12,
    fontFamily: "SFRegular",
    color: "#828282",
  },
  passwordhash: {
    fontSize: 14,
    color: "#222222",
    fontFamily: "SFBold",
    marginTop: 5,
  },
  notificationContainer: {
    width: WIDTH - 40,
    height: 64,
    borderRadius: 4,
    backgroundColor: "#fff",
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  salesText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#222222",
    fontFamily: "SFBold",
  },
});
