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
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import { RadioButton } from "react-native-paper";
import UserHeader from "../components/common/UserHeader";
import MyOrdersCard from "../components/MyOrdersCard";
import React, { useState } from "react";

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

  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState("first");

  return (
    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <UserHeader back={require("../assets/icons/arrow-back.png")} />

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.filterContainer}
          >
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
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
                    // color: checked === "first" ? "#628EE1" : "#595959",
                  }}
                >
                  Last 7 Days
                </Text>
              </View>
              <View style={styles.modalSeprator} />

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
                    // color: checked === "second" ? "#628EE1" : "#595959",
                  }}
                >
                  This Months
                </Text>
              </View>
              <View style={styles.modalSeprator} />

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
                  Last 3 Months
                </Text>
              </View>

              <View style={styles.modalSeprator} />
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
                    // color: checked === "fourth" ? "#628EE1" : "#595959",
                  }}
                >
                  This Year
                </Text>
              </View>
              <View style={styles.modalSeprator} />

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
                    // color: checked === "fifth" ? "#628EE1" : "#595959",
                  }}
                >
                  2020
                </Text>
              </View>
              <View style={{ ...styles.modalSeprator, marginTop: 5 }} />

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  modalView: {
    paddingTop: 10,
    width: 170,
    height: 290,
    backgroundColor: "white",
    borderRadius: 15,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#5184E5",

    textAlign: "center",
    fontFamily: "SFBold",
    paddingTop: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  radioButtonText: {
    fontSize: 13,
    marginLeft: 10,
    fontFamily: "SFBold",
    color: "#000000",
  },

  radioButtonmainContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
  },
  modalSeprator: {
    width: 170,
    height: 1.5,
    backgroundColor: "#F0F0F0",
    marginTop: 13,
  },
});
