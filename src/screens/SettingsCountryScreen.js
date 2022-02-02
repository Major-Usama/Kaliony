import {
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import UserHeader from "../components/common/UserHeader";
  
  const WIDTH = Dimensions.get("window").width;
  export default function SettingsCountryScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <UserHeader back={require("../assets/icons/arrow-back.png")} />
  
        <View style={styles.langaugesMainContainer}>
          <View style={styles.languageCardContainer}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/icons/flag1.png")}
            />
  
            <Text style={styles.langaugeText}>England</Text>
  
            <View />
          </View>
  
          <View
            style={{
              ...styles.languageCardContainer,
              backgroundColor: "#DADADA",
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/icons/flag2.png")}
            />
  
            <Text style={styles.langaugeText}>Armenia</Text>
  
            <View />
          </View>
  
          <View
            style={{
              ...styles.languageCardContainer,
              backgroundColor: "#DADADA",
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/icons/flag3.png")}
            />
  
            <Text style={styles.langaugeText}>Russia</Text>
  
            <View />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    languageCardContainer: {
      width: WIDTH - 40,
      height: 64,
      backgroundColor: "#fff",
      borderRadius: 4,
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
      marginBottom: 15,
    },
    langaugeText: {
      fontSize: 18,
      color: "#000",
      fontFamily: "SFBold",
    },
    langaugesMainContainer: {
      marginTop: 71,
    },
  });
  