import {
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import Checkbox from "expo-checkbox";
import UserHeader from "../components/common/UserHeader";
  
  const WIDTH = Dimensions.get("window").width;
  
  export default function UserShippingAddressScreen({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <UserHeader
           back={require('../assets/icons/arrow-back.png')}
         
        />
  
          <View style={{ marginTop: 36 }}>
            <View style={styles.useshippingAddressContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#303030" : "#909090"}
              />
  
              <Text style={styles.useshippingText}>
                Use as the shipping address
              </Text>
            </View>
            <View style={styles.addressBoxContainer}>
                <View style={styles.editAddresContainer}>
              <Text style={styles.customerName}>Eduard Terakyan</Text>
              <TouchableOpacity
              onPress={()=>navigation.navigate('EditUserShippingAddressScreen')}
              >
              <Image
              style={{width:24,height:24}}
              source={require('../assets/icons/edit.png')}
              />
              </TouchableOpacity>
              </View>
              <View style={styles.seprator1} />
  
              <View>
                <Text style={styles.adressText}>
                  st Sayat Nova 4 ,{"\n"}Yerevan Armenia
                </Text>
              </View>
            </View>
          </View>
  
          {/* second address */}
          <View style={{ marginTop: 36 }}>
            <View style={styles.useshippingAddressContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked2}
                onValueChange={setChecked2}
                color={isChecked2 ? "#303030" : "#909090"}
              />
  
              <Text style={styles.useshippingText}>
                Use as the shipping address
              </Text>
            </View>
            <View style={styles.addressBoxContainer}>
            <View style={styles.editAddresContainer}>
              <Text style={styles.customerName}>Sahak Hakobyan</Text>
              <TouchableOpacity
                onPress={()=>navigation.navigate('EditUserShippingAddressScreen')}
              >
              <Image
              style={{width:24,height:24}}
              source={require('../assets/icons/edit.png')}
              />
              </TouchableOpacity>
              </View>
              <View style={styles.seprator1} />
  
              <View>
                <Text style={styles.adressText}>
                  25 rue Robert Latouche, Nice, 06200, Côte D’azur,{"\n"}France
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={()=>navigation.navigate('EditUserShippingAddressScreen')}
        activeOpacity={0.7}
        style={styles.addAddressButton}
        >
            <Text
            style={styles.addAddresstext}
            >ADD ADRESS</Text>

        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
      flex: 1,
      backgroundColor: "#fff",
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
    },
  
    useshippingAddressContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 20,
    },
    checkbox: {
      margin: 8,
    },
  
    useshippingText: {
      fontSize: 18,
      fontFamily: "SFRegular",
      color: "#808080",
      marginLeft: 8,
    },
    addressBoxContainer: {
      width: WIDTH - 40,
      padding: 4,
      backgroundColor: "#fff",
      borderRadius: 8,
      alignSelf: "center",
      marginTop: 14,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
      paddingBottom: 15,
    },
  
    customerName: {
      fontSize: 18,
      fontFamily: "SFBold",
      color: "#303030",
  
      
    },
  
    seprator1: {
      width: WIDTH - 40,
      height: 2,
      backgroundColor: "#F0F0F0",
      marginTop: 14,
    },
    adressText: {
      fontSize: 14,
      color: "#808080",
      fontFamily: "SFRegular",
      lineHeight: 25,
      marginLeft: 20,
      marginTop: 10,
    },

    addAddressButton:
    {
        width:WIDTH-40,
        height:50,
        borderRadius:15,
        backgroundColor:'#9D9D9D',
        alignSelf:'center',
        bottom:25,
        justifyContent:'center',
        alignItems:'center'

    },
    addAddresstext:
    {
        fontSize:16,
        fontFamily:'SFBold',
        color:'#fff',
    },
    editAddresContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingTop: 15,

    }
  });
  