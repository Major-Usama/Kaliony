import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import { RadioButton } from "react-native-paper";
import Modal from "react-native-modal";
const WIDTH = Dimensions.get("window").width;

const DATA = [
  {
    id: "1",
    title: "SMOK Nord\n50w Kit",
    price: "21500 ֏",
    image: require("../assets/images/products/p1.jpg"),
  },
  {
    id: "2",
    title: "KALIONY\n-TRAVEL KIT",
    price: "15000 ֏",
    image: require("../assets/images/products/p2.jpg"),
  },
  {
    id: "3",
    title: "SMOK Nord\n50w Kit",
    price: "21500 ֏",
    image: require("../assets/images/products/p1.jpg"),
  },
  {
    id: "4",
    title: "SMOK Nord\n50w Kit",
    price: "21500 ֏",
    image: require("../assets/images/products/p1.jpg"),
  },
  {
    id: "5",
    title: "KALIONY\n-TRAVEL KIT",
    price: "15000 ֏",
    image: require("../assets/images/products/p2.jpg"),
  },
  {
    id: "6",
    title: "KALIONY\n-TRAVEL KIT",
    price: "15000 ֏",
    image: require("../assets/images/products/p2.jpg"),
  },
];

export default function ProductsPageScreen({ navigation }) {
  const [search, setSearch] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState("first");

  const renderItem = ({ item }) => (
    <ProductItem title={item.title} price={item.price} image={item.image} />
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeHeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 13, height: 23, marginLeft: 27, marginRight: 10 }}
            source={require("../assets/icons/arrow-back.png")}
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
            style={styles.input}
            onChangeText={setSearch}
            value={search}
          />

          <TouchableOpacity
            style={{ right: 26, zIndex: 999999 }}
            onPress={() => setSearch("")}
          >
            <Image
              style={styles.crossIcon}
              source={require("../assets/icons/close.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.homeHeaderRightContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeWalletScreen")}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("../assets/icons/wallet.png")}
            />
          </TouchableOpacity>

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

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          ...styles.sortingContainer,

          backgroundColor: isModalVisible === true ? "#5D88D8" : "#fff",
        }}
      >
        <Text
          style={{
            ...styles.sortingText,
            color: isModalVisible === true ? "#fff" : "#5D88D8",
          }}
        >
          Sorting
        </Text>
      </TouchableOpacity>

      <View style={styles.prodcuctsPagelistContainer}>
        <FlatList
          contentContainerStyle={{ alignSelf: "center", paddingBottom: 100 }}
          numColumns={2}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View>
        <Modal
          backdropOpacity={0.4}
          onBackdropPress={() => setModalVisible(false)}
          isVisible={isModalVisible}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalHandle}
            />

            <View style={{ marginTop: 60, marginLeft: 62 }}>
              <View style={styles.radioButtonmainContainer}>
                <RadioButton
                  color="#6390E3"
                  uncheckedColor="#C2C2C2"
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />

                <Text
                  onPress={() => setChecked("first")}
                  style={{
                    ...styles.radioButtonText,
                    color: checked === "first" ? "#628EE1" : "#595959",
                  }}
                >
                  Lowest Price
                </Text>
              </View>

              <View style={styles.radioButtonmainContainer}>
                <RadioButton
                  color="#6390E3"
                  uncheckedColor="#C2C2C2"
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                />

                <Text
                  onPress={() => setChecked("second")}
                  style={{
                    ...styles.radioButtonText,
                    color: checked === "second" ? "#628EE1" : "#595959",
                  }}
                >
                  Highest
                </Text>
              </View>

              <View style={styles.radioButtonmainContainer}>
                <RadioButton
                  color="#6390E3"
                  uncheckedColor="#C2C2C2"
                  value="third"
                  status={checked === "third" ? "checked" : "unchecked"}
                  onPress={() => setChecked("third")}
                />

                <Text
                  onPress={() => setChecked("third")}
                  style={{
                    ...styles.radioButtonText,
                    color: checked === "third" ? "#628EE1" : "#595959",
                  }}
                >
                  Popularity
                </Text>
              </View>

              <View style={styles.radioButtonmainContainer}>
                <RadioButton
                  color="#6390E3"
                  uncheckedColor="#C2C2C2"
                  value="fourth"
                  status={checked === "fourth" ? "checked" : "unchecked"}
                  onPress={() => setChecked("fourth")}
                />

                <Text
                  onPress={() => setChecked("fourth")}
                  style={{
                    ...styles.radioButtonText,
                    color: checked === "fourth" ? "#628EE1" : "#595959",
                  }}
                >
                  Newest
                </Text>
              </View>

              <View style={styles.radioButtonmainContainer}>
                <RadioButton
                  color="#6390E3"
                  uncheckedColor="#C2C2C2"
                  value="fifth"
                  status={checked === "fifth" ? "checked" : "unchecked"}
                  onPress={() => setChecked("fifth")}
                />

                <Text
                  onPress={() => setChecked("fifth")}
                  style={{
                    ...styles.radioButtonText,
                    color: checked === "fifth" ? "#628EE1" : "#595959",
                  }}
                >
                  Best Selling
                </Text>
              </View>
            </View>
          </View>
        </Modal>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },

  input: {
    width: 204,
    height: 36,
    borderRadius: 10,
    paddingHorizontal: 36,
    fontSize: 14,
    fontFamily: "SFBold",
    color: "rgba(60, 60, 67, 0.6)",
    backgroundColor: "rgba(250, 250, 250, 0.93)",
  },

  crossIcon: {
    width: 18,
    height: 18,
    zIndex: 9999,
  },

  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:20,
  },

  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  sortingContainer: {
    width: 148,
    height: 32,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    alignSelf: "flex-end",
    marginRight: 34,
    marginTop: 16,
  },
  sortingText: {
    color: "#5D88D8",
    fontFamily: "SFBold",
    fontSize: 14,
  },

  prodcuctsPagelistContainer: {
    marginTop: 12,
  },

  modalView: {
    width: WIDTH,
    height: 380,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignSelf: "center",
    position: "absolute",
    bottom: -20,
  },
  modalHandle: {
    width: 42,
    height: 8,
    backgroundColor: "#E9E9E9",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 12,
  },

  radioButtonText: {
    fontSize: 18,
    marginLeft: 24,
    fontFamily: "SFMedium",
    color: "#628EE1",
  },

  radioButtonmainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
