import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";

export default function NotificationLista() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NotificationDetailScreen", {
          title: "Hot Sale (Not Readed )",
        })
      }
      activeOpacity={0.7}
      style={styles.notificationListContainer}
    >
      <Text style={styles.listTitle}>Hot Sale (Not Readed ) </Text>

      <Text style={styles.listSubtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium
        et in arcu{"\n"}
        adipiscing nec. Turpis pretium et in arcu adipiscing nec. Turpis pretium
        et in arcu{"\n"} adipiscing nec.
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notificationListContainer: {
    width: WIDTH,
    height: 95,
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    borderColor: "#fff",
  },

  listTitle: {
    fontSize: 14,
    color: "#303030",
    fontFamily: "SFBold",
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  listSubtitle: {
    fontSize: 10,
    fontFamily: "SFRegular",
    color: "#808080",
    paddingTop: 7,
    paddingHorizontal: 20,
  },
});
