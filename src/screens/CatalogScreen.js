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
  ScrollView,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;

export default function CatalogScreen({ navigation }) {
  const [search, setSearch] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {HeaderCatalog(setSearch, search, navigation)}

        <View style={styles.catalogItemsMainContainer}>
          <View style={styles.catalogFirstRow}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("ProductsPageScreen")}
            >
              <Image
                style={styles.catalogItem}
                source={require("../assets/images/Catalog/kits.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("ProductsPageScreen")}
              activeOpacity={0.7}
            >
              <Image
                style={styles.catalogItem}
                source={require("../assets/images/Catalog/eliquid.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.catalogFirstRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductsPageScreen")}
              activeOpacity={0.7}
            >
              <Image
                style={styles.catalogItem}
                source={require("../assets/images/Catalog/disposible.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("ProductsPageScreen")}
              activeOpacity={0.7}
            >
              <Image
                style={styles.catalogItem}
                source={require("../assets/images/Catalog/parts.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.catalogFirstRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductsPageScreen")}
              activeOpacity={0.7}
            >
              <Image
                style={styles.catalogItemlast}
                source={require("../assets/images/Catalog/other.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    flex: 1,
    backgroundColor: "#ffff",
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },

  input: {
    width: 251,
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

  catalogItemsMainContainer: {
    marginTop: 20,
  },
  catalogItem: {
    width: 157,
    height: 157,
  },

  catalogItemlast: {
    width: WIDTH - 43,
    height: 228,
    alignSelf: "center",
    borderRadius: 15,
  },
  catalogFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
function HeaderCatalog(setSearch, search, navigation) {
  return (
    <View style={styles.homeHeaderContainer}>
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
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("HomeWalletScreen")}
        >
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={require("../assets/icons/wallet.png")}
          />
        </TouchableOpacity> */}
        <View style={{marginRight:20,}} />

        <Image
          style={{ width: 28, height: 27 }}
          source={require("../assets/icons/bell.png")}
        />
      </View>
    </View>
  );
}
