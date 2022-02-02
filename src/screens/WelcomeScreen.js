import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollViewBase,
  ScrollView,
} from "react-native";
import React from "react";
import Button from "../components/common/Button";
const WIDTH = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#151515"
      />

      <Text style={styles.welcomeToText}> Welcome to</Text>

      <Image
        style={styles.logo}
        source={require("../assets/icons/mainlogo.png")}
      />

      <View style={styles.bottomButtonsContainer}>
        <Button
          onPress={() => navigation.navigate("RegistrationScreen")}
          bColor="#fff"
          title="UNDER 18"
          bg="#151515"
          bWidth={1}
          width={WIDTH - 130}
        />

        <Button
          onPress={() => navigation.navigate("RegistrationScreen")}
          bColor="#5184E5"
          title="18+"
          bg="#5184E5"
          bWidth={1}
          width={WIDTH - 130}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  welcomeToText: {
    fontSize: 24,
    lineHeight: 29,
    color: "#fff",
    textAlign: "center",
    fontFamily: "SFRegular",
    marginTop: 110,
  },
  logo: {
    width: 243,
    height: 101,
    alignSelf: "center",
    marginTop: 35,
  },

  bottomButtonsContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 126,
  },
});
