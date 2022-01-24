import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Stars from "react-native-stars";
import FeaturesList from "../components/FeaturesList";
const WIDTH = Dimensions.get("window").width;

const description =
  "Thanks to continuous optimization and stable iterations, the new nord 50W sets new standards for the nord series with an internal 1800mAh battery bringing you up to 50W of power to your satisfaction. The kit includes two versatile pods that work perfectly with the upgraded airflow system to deliver scrumptious flavor and massive vapor: one is the nord pod compatible with nord coil series, and the other is the LP2 pod  compatible with LP2 coil series with enhanced leak-proof technology. Based on the classic appearance, the nord 50Wa advances into two collections featuring a variety of colors and premium textures to match your mood of the day.";

export default function ProductDetailsScreen({ navigation, route }) {
  const { image, title, price } = route.params;

  const [count, setCount] = React.useState(1);

  const [display1, setdisplay1] = React.useState("flex");
  const [display2, setdisplay2] = React.useState("none");
  const [show1, setShow1] = React.useState(false);

  const [type, setType] = React.useState("Black Red Marbling");

  const onPressType = () => {
    setdisplay1("none");
    setShow1(true);
    setdisplay2("flex");
  };

  const onPressMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPressPlus = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };

  const onPressType1 = () => {
    setdisplay1("flex");
    setShow1(false);
    setdisplay2("none");
    setType("Black Red Marbling");
  };

  const onPressType2 = () => {
    setdisplay1("flex");
    setShow1(false);
    setdisplay2("none");
    setType("Black Armor");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
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

        <View style={styles.productImageContainer}>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ProductsComparePage")}
          >
          <TouchableWithoutFeedback>

            <Image
              style={styles.compareIcon}
              source={require("../assets/images/products/compare.png")}
            />
          </TouchableWithoutFeedback>
          </TouchableWithoutFeedback>

          <Image source={image} style={styles.productImage} />

          <Text numberOfLines={1} style={styles.productTitle}>
            {title}
          </Text>

          <View style={{ marginTop: 5 }}>
            <Stars
              default={3.5}
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
          </View>

          <Text style={{ ...styles.productPriceText, display: display1 }}>
            {price}
          </Text>

          {show1 === false ? (
            <TouchableOpacity
              onPress={() => onPressType()}
              activeOpacity={0.7}
              style={{ ...styles.productTypeContainer, display: display1 }}
            >
              <Text style={styles.productTypeText}>{type}</Text>
              <Image
                style={{ width: 6, height: 12 }}
                source={require("../assets/images/products/arrow-right.png")}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ marginTop: 35, display: display2 }}>
              <TouchableOpacity
                onPress={() => onPressType1()}
                style={styles.selectType1Container}
              >
                <Text style={styles.selectTypeText}>Black Red Marbling</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onPressType2()}
                style={styles.selectType2Container}
              >
                <Text style={styles.selectTypeText}>Black Armor</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={{ ...styles.underTypeContainer, display: display1 }}>
            <Text style={styles.quantityText}>Quantity</Text>

            <View style={styles.quantityCounterContainer}>
              <TouchableOpacity onPress={() => onPressMinus()}>
                <Image
                  style={styles.minus}
                  source={require("../assets/images/products/minus.png")}
                />
              </TouchableOpacity>

              <View style={styles.quantityCounter}>
                <Text>{count}</Text>
              </View>

              <TouchableOpacity onPress={() => onPressPlus()}>
                <Image
                  style={styles.minus}
                  source={require("../assets/images/products/plus.png")}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.quantityText}>Description</Text>

            <Text style={styles.descriptionText}>{description}</Text>

            <Text style={styles.quantityText}>Features</Text>
          </View>
        </View>

        <View style={{ marginTop: 25, display: display1 }}>
          <FeaturesList />
        </View>
      </ScrollView>

      <View style={styles.floatingButtonsContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: "#A7B8D8",
            marginRight: 14,
          }}
        >
          <Text style={styles.addtoCartText}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.addtoCartText}>Add to Cart</Text>
        </TouchableOpacity>
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
  },
  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginTop:20,

  },

  productImage: {
    width: 273,
    height: 273,
    alignSelf: "center",
  },

  productImageContainer: {
    width: WIDTH - 100,
    alignSelf: "center",
    marginTop: 40,
  },

  compareIcon: {
    width: 48,
    height: 48,
    position: "absolute",
    right: 10,
    top: -14,
    zIndex: 9999,
  },

  productTitle: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#000",
    textAlign: "center",
  },

  productPriceText: {
    color: "#6390E3",
    fontSize: 24,
    fontFamily: "SFBold",
    textAlign: "center",
    marginTop: 12,
  },

  productTypeContainer: {
    width: WIDTH - 40,
    height: 46,
    borderRadius: 4,
    backgroundColor: "#fff",
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
    marginTop: 10,
  },

  productTypeText: {
    fontSize: 13,
    fontFamily: "SFMedium",
    color: "#222222",
  },

  quantityText: {
    fontSize: 16,
    fontFamily: "SFMedium",
    color: "#000",
    textAlign: "center",
    marginTop: 15,
  },

  minus: {
    width: 33,
    height: 33,
  },

  quantityCounter: {
    width: 128,
    height: 46,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 8,
  },

  descriptionText: {
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "SFRegular",
    color: "#818181",
    lineHeight: 20,
    marginTop: 11,
  },

  featuresListContainer: {},
  featuresList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 43,
  },
  listLeftText: {
    fontSize: 13,
    color: "#717171",
    fontFamily: "SFMedium",
  },

  listRightText: {
    fontSize: 13,
    color: "#638FE2",
    fontFamily: "SFMedium",
  },
  addtoCartText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
    fontFamily: "SFBold",
  },
  button: {
    width: 149,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#6390E3",
    justifyContent: "center",
    alignItems: "center",
  },

  floatingButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    alignSelf: "center",
    bottom: 25,
  },

  selectType1Container: {
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
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  selectType2Container: {
    width: WIDTH - 40,
    height: 64,
    backgroundColor: "#DADADA",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 50,
  },
  selectTypeText: {
    fontSize: 18,
    fontFamily: "SFBold",
    color: "#000",
  },
});
