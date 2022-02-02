import {
  Image,
  Platform,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import NotificationListn from "../components/NotificationListn";
import NotificationLista from "../components/common/NotificationLista";

const DATA = [
  {
    id: "1",
    title: "",
    type: "active",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "",
  },
  {
    id: "8",
    title: "Second Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

export default function NotificationsScreen({ navigation }) {
  const renderItem = ({ item }) =>
    item.type === "active" ? <NotificationLista /> : <NotificationListn />;

  return (
    <SafeAreaView style={styles.container}>
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
              source={require("../assets/icons/bellblue.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100, marginTop: 27 }}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
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
});
