import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
import Stars from "react-native-stars";

export default function ReviewCard(props) {
  return (
    <View style={styles.reviewcontainer}>
      <View style={styles.reviewCardHeader}>
        <Image style={{ width: 80, height: 80 }} source={props.image} />

        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
      <View style={styles.starsDateContainer}>
        <Stars
          default={5}
          count={5}
          half={true}
          starSize={50}
          fullStar={
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/products/fill.png")}
            />
          }
          emptyStar={
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/products/empty.png")}
            />
          }
          halfStar={
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/products/half.png")}
            />
          }
        />

        <Text style={styles.dateText}>20/03/2020</Text>
      </View>

      <View>
        <Text style={styles.reviewdescriptionText}>
          Nice Furniture with good delivery. The delivery time{"\n"}
          is very fast. Then products look like exactly the{"\n"}
          picture in the app. Besides, color is also the same{"\n"}
          and quality is very good despite very cheap price
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewcontainer: {
    width: WIDTH - 40,
    paddingTop: 26,
    paddingBottom: 42,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginBottom: 20,
  },
  reviewCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: "#606060",
    fontFamily: "SFBold",
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#303030",
    marginLeft: 16,
    marginTop: 8,
  },
  dateText: {
    fontSize: 12,
    fontFamily: "SFRegular",
    color: "#808080",
  },
  starsDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 30,
  },
  reviewdescriptionText: {
    fontSize: 14,
    fontFamily: "SFRegualr",
    color: "#303030",
    alignSelf: "center",
    textAlign: "justify",
    marginTop: 15,
  },
});
