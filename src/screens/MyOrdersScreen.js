import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import UserHeader from "../components/common/UserHeader";
import MyOrdersCard from "../components/MyOrdersCard";

const DATA = [
  {
    id: "1",
    title: "First Item",
    type: "Processing",
  },
  {
    id: "2",
    title: "Second Item",
    type: "Delivered",
  },
  {
    id: "3",
    title: "Third Item",
    type: "Processing",
  },
];

export default function MyOrdersScreen({ navigation }) {
  const renderItem = ({ item }) => <MyOrdersCard type={item.type} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <UserHeader back={require("../assets/icons/arrow-back.png")} />

        <TouchableOpacity style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>

        <View>
          <FlatList
            contentContainerStyle={{ marginTop: 21 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
  filterContainer: {
    width: 105,
    height: 35,
    borderWidth: 2,
    borderColor: "#F0F0F0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 36,
    marginRight: 20,
  },

  filterText: {
    color: "#5184E5",
    fontSize: 14,
    fontFamily: "SFMedium",
  },
});
