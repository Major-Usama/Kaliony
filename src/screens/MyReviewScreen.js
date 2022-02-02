import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import UserHeader from "../components/common/UserHeader";
import ReviewCard from "../components/ReviewCard";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Elf bar  RF350",
    subtitle: "7500 AMD",
    image: require("../assets/images/r1.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Smok Nord 50 Wt",
    subtitle: "21500 AMD",
    image: require("../assets/images/r2.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Elf bar  RF350",
    subtitle: "7500 AMD",
    image: require("../assets/images/r1.png"),
  },
];

export default function MyReviewScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ReviewCard
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <UserHeader back={require("../assets/icons/arrow-back.png")} />

        <View style={{ marginTop: 40 }}>
          <FlatList
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
});
