import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { LogBox, StatusBar, Image } from "react-native";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomeScreen from "../screens/HomeScreen";
import CatalogScreen from "../screens/CatalogScreen";
import QRCodeScreen from "../screens/QRCodeScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import StoriesScreen from "../screens/StoriesScreen";
import HomeWalletScreen from "../screens/HomeWalletScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import NotificationDetailScreen from "../screens/NotificationDetailScreen";
import ProductsPageScreen from "../screens/ProductsPageScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsComparePage from "../screens/ProductsComparePage";
import ProductDetailsCompareScreen from "../screens/ProductDetailsCompareScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ShippingAddressScreen from "../screens/ShippingAddressScreen";
import ShippingMethodScreen from "../screens/ShippingMethodScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyOrderDetailsScreen from "../screens/MyOrderDetailsScreen";
import UserShippingAddressScreen from '../screens/UserShippingAddressScreen'
import EditUserShippingAddressScreen from "../screens/EditUserShippingAddressScreen";
import UserSettingsScreen from "../screens/UserSettingsScreen";

const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
  const [loaded] = useFonts({
    SFBold: require("../assets/fonts/SFProDisplay-Bold.ttf"),
    SFRegular: require("../assets/fonts/SFProDisplay-Regular.ttf"),
    SFMedium: require("../assets/fonts/SFProDisplay-Medium.ttf"),
  });
  if (!loaded) {
    return false;
  }

  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
        <Stack.Screen
          name={"RegistrationScreen"}
          component={RegistrationScreen}
        />
        <Stack.Screen name={"tabs"} component={MyTabs} />
        <Stack.Screen name={"StoriesScreen"} component={StoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        activeTintColor: "#5184E5",
        inactiveTintColor: "#fff",
        tabStyle: {
          height: 85,
          backgroundColor: "#322626",
        },

        labelStyle: {
          fontFamily: "SFBold",
          // fontSize:11,
          bottom: 40,
        },

        iconStyle: {
          top: -15,
        },

        style: {
          backgroundColor: "#322626",
          width: "100%",
          height: 85,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  source={require("../assets/icons/tabicons/homea.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
            else
              return (
                <Image
                  source={require("../assets/icons/tabicons/homen.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
          },
        }}
        name="HomeScreen"
        component={HomeStackfunc}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Catalog",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  source={require("../assets/icons/tabicons/cataloga.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
            else
              return (
                <Image
                  source={require("../assets/icons/tabicons/catalogn.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
          },
        }}
        name="CatalogScreen"
        component={CatalogStackfunc}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "QR Code",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  source={require("../assets/icons/tabicons/qra.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
            else
              return (
                <Image
                  source={require("../assets/icons/tabicons/qrn.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
          },
        }}
        name="QRCodeScreen"
        component={QRCodeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Shopping Cart",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  source={require("../assets/icons/tabicons/carta.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
            else
              return (
                <Image
                  source={require("../assets/icons/tabicons/cartn.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
          },
        }}
        name="ShoppingCartScreen"
        component={CartStackfunc}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "User Account",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  source={require("../assets/icons/tabicons/usera.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
            else
              return (
                <Image
                  source={require("../assets/icons/tabicons/usern.png")}
                  style={{ width: 22, height: 22 }}
                />
              );
          },
        }}
        name="UserAccountScreen"
        component={userStackfunc}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackfunc() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="HomeWalletScreen" component={HomeWalletScreen} />
      <HomeStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <HomeStack.Screen
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
      />
    </HomeStack.Navigator>
  );
}

const CatalogStack = createNativeStackNavigator();

function CatalogStackfunc() {
  return (
    <CatalogStack.Navigator screenOptions={{ headerShown: false }}>
      <CatalogStack.Screen name="CatalogScreen" component={CatalogScreen} />

      <CatalogStack.Screen
        name="ProductsPageScreen"
        component={ProductsPageScreen}
      />
      <CatalogStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <CatalogStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <CatalogStack.Screen
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
      />
      <CatalogStack.Screen
        name="ProductsComparePage"
        component={ProductsComparePage}
      />
      <CatalogStack.Screen
        name="ProductDetailsCompareScreen"
        component={ProductDetailsCompareScreen}
      />
      <CatalogStack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
      />
    </CatalogStack.Navigator>
  );
}

// const qrStack = createNativeStackNavigator();

// function qrStackfunc() {
//   return (
//     <qrStack.Navigator screenOptions={{ headerShown: false }}>
//       <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoard} />
//       <LeaderBoardStack.Screen name="LeaderBoard2" component={LeaderBoard2} />
//     </qrStack.Navigator>
//   );
// }

const CartStack = createNativeStackNavigator();

function CartStackfunc() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
      />

      <CartStack.Screen
        name="ProductsComparePage"
        component={ProductsComparePage}
      />
      <CartStack.Screen
        name="ProductDetailsCompareScreen"
        component={ProductDetailsCompareScreen}
      />

      <CartStack.Screen
        name="ProductsPageScreen"
        component={ProductsPageScreen}
      />
      <CartStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />

      <CartStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <CartStack.Screen name="PaymentScreen" component={PaymentScreen} />

      <CartStack.Screen
        name="ShippingAddressScreen"
        component={ShippingAddressScreen}
      />
      <CartStack.Screen
        name="ShippingMethodScreen"
        component={ShippingMethodScreen}
      />
       <CartStack.Screen name="HomeWalletScreen" component={HomeWalletScreen} />
      <CartStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <CartStack.Screen
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
      />
    </CartStack.Navigator>
  );
}

const userStack = createNativeStackNavigator();

function userStackfunc() {
  return (
    <userStack.Navigator screenOptions={{ headerShown: false }}>
      <userStack.Screen name="UserAccountScreen" component={UserAccountScreen} />
      <HomeStack.Screen name="HomeWalletScreen" component={HomeWalletScreen} />
      <userStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <userStack.Screen
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
      />
      <userStack.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
      />
      <userStack.Screen
        name="MyOrderDetailsScreen"
        component={MyOrderDetailsScreen}
      />
       <userStack.Screen
        name="UserShippingAddressScreen"
        component={UserShippingAddressScreen}
      />

        <userStack.Screen
        name="EditUserShippingAddressScreen"
        component={EditUserShippingAddressScreen}
      />
       <userStack.Screen
        name="UserSettingsScreen"
        component={UserSettingsScreen}
      />


    </userStack.Navigator>
  );
}
