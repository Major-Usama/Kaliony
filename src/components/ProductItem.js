import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
const WIDTH = Dimensions.get("window").width;

export default function ProductItem(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.itemproductcontainer}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('ProductDetailsScreen',
      {
        image:props.image,
        title:props.title,
        price:props.price,
      }
      
      )}
      activeOpacity={0.7}>
        <Image style={styles.productImage} source={props.image} />
      </TouchableOpacity>

      <Text style={styles.productTitle}>{props.title}</Text>

      <Text style={styles.productPrice}>{props.price}</Text>

      <View style={{ alignSelf: "flex-start" }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('ShoppingCartScreen',
        {
          image:props.image,
          title:props.title,
          price:props.price,
        }
        )}
        style={styles.button}>
          <Text style={styles.addtoCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemproductcontainer: {
    marginBottom: 23,
    marginHorizontal: 10,
  },

  productImage: {
    width: 160,
    height: 155,
    borderRadius: 15,
  },

  productTitle: {
    fontSize: 13,
    color: "#000",
    fontFamily: "SFBold",
    textAlign: "center",
    marginTop: 5,
  },

  productPrice: {
    fontSize: 24,
    color: "#979797",
    lineHeight: 28,
    fontFamily: "SFBold",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 7,
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
});
