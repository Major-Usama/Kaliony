import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { StoryContainer } from "react-native-stories-view";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const image1 =
  "https://images.unsplash.com/photo-1594177914682-d408d96e458b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const image2 =
  "https://images.unsplash.com/photo-1599177749654-b8f5fe0b016a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80";
const image3 =
  "https://images.unsplash.com/photo-1594177914682-d408d96e458b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function StoriesScreen({ navigation }) {
  const [show, setShow] = React.useState("");

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />

      <View>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image
            style={styles.crossIcon}
            source={require("../assets/icons/cross.png")}
          />
        </TouchableWithoutFeedback>
        <StoryContainer
          barStyle={{
            barActiveColor: "#5184E5",
            barInActiveColor: "#fff",
          }}
          visible={show}
          enableProgress={true}
          images={[image1, image2, image3]}
          duration={10}
          onComplete={() => navigation.goBack()}
          containerStyle={{
            width: WIDTH,
            height: HEIGHT,
          }}
        />
      </View>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
  },

  crossIcon: {
    width: 49,
    height: 49,
    position: "absolute",
    zIndex: 99999,
    right: 10,
    top: 50,
  },
});
