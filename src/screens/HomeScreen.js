import { SafeAreaView, StyleSheet, Text, View,Platform,StatusBar, 
TextInput,
TouchableOpacity,
Image,
ScrollView,
FlatList,
Dimensions,
} from "react-native";
import React from "react";
import { StoryContainer } from 'react-native-stories-view';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const image1 ='https://images.unsplash.com/photo-1594177914682-d408d96e458b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
const image2 ='https://images.unsplash.com/photo-1599177749654-b8f5fe0b016a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80'
const image3='https://images.unsplash.com/photo-1594177914682-d408d96e458b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
const DATA = [
  {
    id: '1',
    title: 'ELF BAR RF350\nREFILLABLE POD',
    image: require('../assets/images/HomeNewProducts/new1.jpg')
  },

  {
    id: '2',
    title: 'SMOK NOVO 4 KIT',
    image: require('../assets/images/HomeNewProducts/new2.jpg')
  },

  {
    id: '3',
    title: 'SMOK NOVO 4 KIT',
    image: require('../assets/images/HomeNewProducts/new2.jpg')
  },
  {
    id: '4',
    title: 'ELF BAR RF350\nREFILLABLE POD',
    image: require('../assets/images/HomeNewProducts/new1.jpg')
  },
];

const DATABestSelling = [
  {
    id: '1',
    title: 'Pineapple & Coconut\nShisha Cloud',
    image: require('../assets/images/BestSelling/best1.jpg')
  },

  {
    id: '2',
    title: 'JUICY LYCHEE\nSHISHA CLOUD',
    image: require('../assets/images/BestSelling/best2.jpg')
  },

  {
    id: '3',
    title: 'HOLY MANGO\nSHISHA CLOUD',
    image: require('../assets/images/BestSelling/best3.jpg')
  },
  {
    id: '4',
    title: 'Pineapple & Coconut\nShisha Cloud',
    image: require('../assets/images/BestSelling/best1.jpg')
  },
];


export default function HomeScreen() {
  const [search, setSearch] = React.useState("");
  const [show,setShow] = React.useState('')

  const renderItem = ({ item }) => (
   <TouchableOpacity
   style={styles.newProductsContainer}
   activeOpacity={0.7}
   >
     <Image 
     style={{width:130,height:130,marginRight:20,}}
     source={item.image}
     />

     <Text
     style={styles.newproductTitle}
     >{item.title}</Text>

   </TouchableOpacity>
  )

  const renderItemBestSelling = ({ item }) => (
    <TouchableOpacity
    style={styles.newProductsContainer}
    activeOpacity={0.7}
    >
      <Image 
      style={{width:130,height:130,marginRight:20,}}
      source={item.image}
      />
 
      <Text
      style={styles.newproductTitle}
      >{item.title}</Text>
 
    </TouchableOpacity>
   )
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />

<StoryContainer
barActiveColor="#5184E5"
barInActiveColor="#fff"
   visible={show}
   enableProgress={true}
  images={[image1,image2,image3]}
   duration={10}  
   onComplete={() => setShow(false)}
   containerStyle={{
       width: WIDTH,
       height:HEIGHT,
       
   }}
/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:30,}}
      >
      <View style={styles.homeHeaderContainer}>
     <View style={styles.searchContainer}>
     <TextInput
     placeholder="Search"
     placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
     style={styles.input}
     onChangeText={setSearch}
       value={search}
      />
      
      <TouchableOpacity
      style={{right:26,zIndex:999999}}
      onPress={()=>setSearch('')}
      >
        <Image 
        style={styles.crossIcon}
         source={require('../assets/icons/close.png')}
        />
      </TouchableOpacity>
     </View>

     <View style={styles.homeHeaderRightContainer}>
       <Image
       style={{width:30,height:30,marginRight:10,}}
       source={require('../assets/icons/wallet.png')}
       />
      
     <Image
       style={{width:28,height:27}}
       source={require('../assets/icons/bell.png')}
       />
     </View>
     </View>

    <View>
     <ScrollView
     nestedScrollEnabled
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{marginLeft:20,marginTop:18}}
     horizontal
     style={styles.homeTopImagesContainer}>
     
     
       <Image 
       style={styles.topImage}
       source={require('../assets/images/HomeTopImages/image1.jpg')}
       />

      <Image 
       style={styles.topImage}
       source={require('../assets/images/HomeTopImages/image2.jpg')}
       />

      <Image 
       style={styles.topImage}
       source={require('../assets/images/HomeTopImages/image3.jpg')}
       />

       <Image 
       style={styles.topImage}
       source={require('../assets/images/HomeTopImages/image3.jpg')}
       />

     </ScrollView>

     </View>
     <View>
       <Text
       style={styles.newProductsText}
       >New Products</Text>
     <FlatList
     nestedScrollEnabled
     contentContainerStyle={{marginLeft:20,marginTop:10,paddingRight:10,}}
     showsHorizontalScrollIndicator={false}
     horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      
      <View
      style={styles.wideImageContainer}
      >
       
       <TouchableOpacity
       onPress={()=>setShow(true)}
       activeOpacity={0.7}
       >
        <Image
        style={styles.wideImage}
        source={require('../assets/images/wideImage.jpg')}
        />
        </TouchableOpacity>

      </View>

      <View>
       <Text
       style={styles.newProductsText}
       >Best Selling</Text>
     <FlatList
     nestedScrollEnabled
     contentContainerStyle={{marginLeft:20,marginTop:10,paddingRight:10,}}
     showsHorizontalScrollIndicator={false}
     horizontal
        data={DATABestSelling}
        renderItem={renderItemBestSelling}
        keyExtractor={item => item.id}
      />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#ffff",
  },

  searchContainer:
  {
  
    flexDirection:"row",
    alignItems:'center',
    marginLeft:20,
    

  },

  input:
  {
    width:251,
    height:36,
    borderRadius:10,
    paddingHorizontal:36,
    fontSize:14,
    fontFamily:"SFBold",
    color:'rgba(60, 60, 67, 0.6)',
    backgroundColor:"rgba(250, 250, 250, 0.93)"
  },

  crossIcon:
  {
    width:18,
    height:18,
    zIndex:9999
  },

  homeHeaderContainer:
  {
    flexDirection:'row',
    alignItems:'center',
   

  },

  homeHeaderRightContainer:
   
  {
    flexDirection:'row',
    alignItems:'center'
  },

  topImage:
  {
    width:110,
    height:165,
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight:20,

  },

  newProductsText:
  {
    fontSize:18,
    color:'#000',
    fontFamily:'SFRegular',
    marginLeft:38,
    marginTop:18,


  },

  newproductTitle:
  {
    fontSize:12,
    fontFamily:'SFBold',
    textAlign:'justify',
    color:'#535353',
     marginLeft:13,
     marginTop:8,
  },

  wideImageContainer:
  {

  },

  wideImage:
  {
    

      width:WIDTH-40,
      height:135,
      alignSelf:'center',
      marginTop:18,
      borderRadius:15
    
  }
});
