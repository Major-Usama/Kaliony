import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Button from "../components/common/Button";
import Textinputs from "../components/common/Textinputs";
const WIDTH = Dimensions.get("window").width;

export default function RegistrationScreen({navigation}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "#151515" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          style={styles.container}
        >
          <Text style={styles.createAccountText}>Create account</Text>

          <Image
            style={styles.logo}
            source={require("../assets/icons/mainlogo.png")}
          />

          <View style={styles.inputsMainContainer}>
            <Textinputs
              value={login}
              onChangeText={setLogin}
              label={"Login"}
              password={false}
            />

            <Textinputs
              value={password}
              onChangeText={setPassword}
              label={"Password"}
              password={true}
            />

            <Textinputs
              value={confirmpassword}
              onChangeText={setConfirmPassword}
              label={"Confirm Password"}
              password={true}
            />

            <View style={{ marginTop: 40 }}>
              <Button
                onPress={() => navigation.navigate("tabs")}
                bColor="#5184E5"
                title="SIGN IN"
                bg="#5184E5"
                bWidth={1}
                width={WIDTH - 130}
              />
            </View>

            <View style={styles.socialIconsContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.socialicon}
                  source={require("../assets/icons/insta.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.socialicon}
                  source={require("../assets/icons/google.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.socialicon}
                  source={require("../assets/icons/facebook.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "101.5%",
    backgroundColor: "#151515",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  createAccountText: {
    fontSize: 24,
    lineHeight: 28,
    color: "#fff",
    textAlign: "center",
    marginTop: 110,
    fontFamily: "SFRegular",
  },

  logo: {
    width: 106,
    height: 44,
    alignSelf: "center",
    marginTop: 34,
  },

  inputsMainContainer: {
    paddingHorizontal: 40,
    marginTop: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  inputContainerStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    paddingHorizontal: 10,
    height: 64,
    width: 295,
    borderRadius: 15,
    paddingTop: 5,
    marginBottom: 16,
    paddingRight: 20,
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#222222",
  },
  socialIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 48,
    paddingBottom: 100,
  },

  socialicon: {
    width: 54,
    height: 54,
  },
});
