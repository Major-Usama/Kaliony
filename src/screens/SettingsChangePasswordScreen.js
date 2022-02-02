import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
const WIDTH = Dimensions.get("window").width;

import UserHeader from "../components/common/UserHeader";
import UserTextinput from "../components/common/UserTextInput";

export default function SettingsChangePasswordScreen({ navigation }) {
  const [oldpass, setOldPass] = React.useState("***************");
  const [newpass, setNewPass] = React.useState("***************");
  const [confirmnewpass, setConfirmNewass] = React.useState("***************");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <UserHeader back={require("../assets/icons/arrow-back.png")} />

        <Text style={styles.personalInfoText}>Personal Information</Text>

        <View style={{ marginTop: 16 }}>
          <UserTextinput
            type="default"
            value={oldpass}
            onChangeText={setOldPass}
            label={"Old Password"}
            password={true}
          />

          <UserTextinput
            type="default"
            value={newpass}
            onChangeText={setNewPass}
            label={"New Password"}
            password={true}
          />

          <UserTextinput
            type="default"
            value={confirmnewpass}
            onChangeText={setConfirmNewass}
            label={"Confirm your password"}
            password={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("UserSettingsScreen")}
          activeOpacity={0.7}
          style={styles.addAddressButton}
        >
          <Text style={styles.addAddresstext}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  personalInfoText: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#909191",
    marginLeft: 20,
    marginTop: 25,
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
});
