import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
export default function ShoppingCartScreen({ navigation }) {
  const [count, setCount] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [promo, setPromo] = React.useState("");

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
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
          <View style={{marginRight:20,}} />
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("HomeWalletScreen")}
            >
              <Image
                style={{ width: 30, height: 30, marginRight: 10 }}
                source={require("../assets/icons/wallet.png")}
              />
            </TouchableOpacity> */}

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

        <View style={styles.subTotalContainer}>
          <Text style={styles.subtotalText}>
            SUBTOTAL:{" "}
            <Text style={{ ...styles.subtotalText, fontFamily: "SFBold" }}>
              21500
            </Text>
            <Text style={{ ...styles.subtotalText, fontSize: 14 }}>AMD</Text>
          </Text>
        </View>

        <View style={styles.cartItemDetailsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                title: "SMOK Nord 50w Kit",
                price: "21500 ֏",
                image: require("../assets/images/products/p1.jpg"),
              })
            }
          >
            <Image
              style={styles.cartItemImage}
              source={require("../assets/images/products/p1.jpg")}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.cartItemTitle}>SMOK Nord 50w Kit</Text>

            <View style={{ marginRight: 16 }}>
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
            </View>

            <Text style={styles.priceText}>21500 ֏</Text>
          </View>
        </View>

        <View style={styles.enterPromoCodeContainer}>
          <TextInput
            placeholder="Enter your promo code"
            placeholderTextColor={"#999999"}
            style={styles.inputPromo}
            onChangeText={setPromo}
            value={promo}
          />
          <TouchableWithoutFeedback>
            <Image
              style={{ width: 45, height: 45, position: "absolute", right: 0 }}
              source={require("../assets/icons/promoright.png")}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.totalAmountContainer}>
          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>Subtotal</Text>

            <Text style={styles.itemAmountText}>21500AMD</Text>
          </View>

          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>Promocode</Text>

            <Text style={{ ...styles.itemAmountText, color: "#D13B3B" }}>
              -1000AMD
            </Text>
          </View>

          <Image
            style={styles.seprator}
            source={require("../assets/images/sep.png")}
          />
          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>Total</Text>

            <Text style={styles.itemAmountText}>20500AMD</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("CheckoutScreen")}
          activeOpacity={0.7}
          style={styles.buyNoewButton}
        >
          <Text style={styles.buyNowText}>BUY NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    flex: 1,
    backgroundColor: "#ffff",
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
    marginTop: Platform.OS === "android" ? 0 : 20,
  },

  homeHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  subTotalContainer: {
    width: WIDTH,
    height: 56,
    backgroundColor: "#5184E5",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  subtotalText: {
    fontSize: 18,
    fontFamily: "SFRegular",
    color: "#fff",
  },
  cartItemDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 17,
  },

  cartItemImage: {
    width: 140,
    height: 140,
  },
  cartItemTitle: {
    fontSize: 13,
    fontFamily: "SFBold",
    color: "#000",
    top: 5,
  },
  minus: {
    width: 33,
    height: 33,
    tintColor: "#000",
  },

  quantityCounter: {
    width: 90,
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 185,
    marginTop: 28,
  },

  priceText: {
    fontSize: 24,
    fontFamily: "SFBold",
    color: "#979797",
    marginTop: 8,
  },

  enterPromoCodeContainer: {
    width: WIDTH - 40,
    height: 45,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignSelf: "center",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },

  inputPromo: {
    height: 45,
    color: "#000",
    fontFamily: "SFregular",
    width: WIDTH - 120,
    paddingLeft: 20,
  },

  totalAmountContainer: {
    width: WIDTH - 40,
    borderRadius: 8,
    height: 130,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignSelf: "center",
    marginTop: 20,
    paddingTop: 14,
  },
  itemsubtotalText: {
    fontSize: 18,
    color: "#909090",
    fontFamily: "SFReagular",
  },

  itemAmountText: {
    fontSize: 18,
    color: "#303030",
    fontFamily: "SFBold",
  },

  subTotalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  seprator: {
    width: WIDTH - 60,
    height: 6,
    alignSelf: "center",
    marginTop: 10,
  },

  buyNoewButton: {
    width: WIDTH - 40,
    height: 50,
    backgroundColor: "#4467AA",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100,
  },

  buyNowText: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#fff",
  },
});
