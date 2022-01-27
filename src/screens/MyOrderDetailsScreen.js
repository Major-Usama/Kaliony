import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View ,TouchableOpacity,Image, Dimensions} from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width
export default function MyOrderDetailsScreen({navigation,route}) {
    const { type } = route.params
  return (
    <SafeAreaView
    style={styles.container}
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

    <View style={styles.oredrNumberContainer}>
        <View />
        <View />
        

        <View>
            <Text
            style={styles.oredrnmberText}
            >Order No238562312</Text>
            <Text
            style={styles.orderDateText}
            >20/03/2020</Text>

            
        </View>
        <Image
            style={{width:34,height:34,bottom:5,}}
            source={require('../assets/icons/redcross.png')}
            />

           

    </View>
    <Text
    style={{...styles.typeText,color:type==='Processing' ?'#8E8E8E':"#27AE60"}}
    >{type}</Text>


    <View style={styles.oredrProductContainer}>
    
    <Image
    style={{width:100,height:100}}
    source={require('../assets/images/products/p1.jpg')}
    />
       <View style={{marginLeft:18,}}>
    <Text style={styles.productTitle}>
    SMOK Nord 50w Kit{"\n"}
    <Text
    style={{...styles.productTitle,fontFamily:'SFRegular'}}
    >Quantity:1</Text>
    </Text>

    <Text
    style={styles.orderPrice}
    >21500</Text>
       </View>
    </View>

    <View
    style={styles.seprator2}
    />

<View style={styles.totalAmountContainer}>
          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>Subtotal</Text>

            <Text style={styles.itemAmountText}>21500AMD</Text>
          </View>
          <View style={styles.subTotalRow}>
            <Text style={styles.itemsubtotalText}>shipping</Text>

            <Text style={styles.itemAmountText}>1500AMD</Text>
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
          <View style={{ ...styles.subTotalRow, marginTop: 8 }}>
            <Text style={styles.itemsubtotalText}>Total</Text>

            <Text style={{ ...styles.itemAmountText, color: "#5587E6" }}>
              22500AMD
            </Text>
          </View>
        </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
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

  oredrnmberText:
  {
      fontSize:16,
      fontFamily:'SFBold',
      color:"#303030",

  },

  orderDateText:
  {
      fontSize:14,
      fontFamily:'SFRegular',
      color:'#909090',
      textAlign:'center'
  },

  oredrNumberContainer:
  {
      flexDirection:'row',
      
      justifyContent:"space-around",
      paddingHorizontal:0,
      marginTop:43,
  }
,
typeText:
{
    fontSize:16,
    textAlign:'center',
    fontFamily:'SFBold',
    marginTop:17,

},
productTitle:
{
    fontSize:14,
    fontFamily:'SFBold',
    color:'#000000'
},

orderPrice:
{
    fontSize:24,
    color:'#979797',
    fontFamily:'SFBold',
},
oredrProductContainer:
{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:25,
    marginTop:36,
    
},
seprator2:
{
    width:WIDTH-40,
    alignSelf:'center',
    height:1.6,
    backgroundColor:'#E9E9E9',
    marginTop:35
},
totalAmountContainer: {
    width: WIDTH - 40,
    marginBottom: 80,
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignSelf: "center",
    marginTop: 27,
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
  },

  buyNowText: {
    fontSize: 16,
    fontFamily: "SFBold",
    color: "#fff",
  },

});
