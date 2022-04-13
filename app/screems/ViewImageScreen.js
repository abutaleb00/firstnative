import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/bg2.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
   // position:"absolute",
    top:40,
    left:30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position:"absolute",
    top:40,
    right:30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
