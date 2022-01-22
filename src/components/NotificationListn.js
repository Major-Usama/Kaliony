import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get("window").width;

export default function NotificationListn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('NotificationDetailScreen',
    {
      title:"Readed notification",
    }
    )}
      activeOpacity={0.7}
      style={styles.notificationListContainer}
    >
      <Text style={styles.listTitle}>Readed notification</Text>

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
    backgroundColor: "#F9F9F9",
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
