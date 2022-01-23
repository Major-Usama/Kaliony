import { SafeAreaView, StyleSheet, Text, View,Platform,StatusBar, } from "react-native";
import React from "react";

export default function QRCodeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is QRCode Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    flex: 1,
    backgroundColor: "#ffff",
  },
});
