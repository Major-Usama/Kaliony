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

const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
  const [loaded] = useFonts({
    SFBold: require("../assets/fonts/SFProDisplay-Bold.ttf"),
    SFRegular: require("../assets/fonts/SFProDisplay-Regular.ttf"),
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
        activeTintColor:"#5184E5",
        inactiveTintColor:"#fff",
        tabStyle: {
          height: 85,
          backgroundColor: "#322626",
          
        },

        
        labelStyle:
        {
            fontFamily:'SFBold',
            // fontSize:11,
            bottom:40,

        },
     
        iconStyle: {
          top: -15
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
        component={HomeScreen}
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
        component={CatalogScreen}
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
        component={ShoppingCartScreen}
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
        component={UserAccountScreen}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackfunc() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="OverView" component={OverView} />
    </HomeStack.Navigator>
  );
}

const CatalogStack = createNativeStackNavigator();

function CatalogStackfunc() {
  return (
    <CatalogStack.Navigator screenOptions={{ headerShown: false }}>
      <CatalogStack.Screen name="Pricing" component={Pricing} />
    </CatalogStack.Navigator>
  );
}

const qrStack = createNativeStackNavigator();

function qrStackfunc() {
  return (
    <qrStack.Navigator screenOptions={{ headerShown: false }}>
      <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoard} />
      <LeaderBoardStack.Screen name="LeaderBoard2" component={LeaderBoard2} />
    </qrStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackfunc() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Plaid" component={Plaid} />
    </CartStack.Navigator>
  );
}

const userStack = createNativeStackNavigator();

function userStackfunc() {
  return (
    <userStack.Navigator screenOptions={{ headerShown: false }}>
      <userStack.Screen name="Plaid" component={Plaid} />
    </userStack.Navigator>
  );
}