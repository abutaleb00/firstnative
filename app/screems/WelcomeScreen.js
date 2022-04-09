import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../component/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/bg.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo1.png")} />
        <Text style={styles.tagline}>
          Sell What You ont't Need'nbvcbvc
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log("Login Click")} />
        <AppButton title="Register" color="secondary" onPress={() => console.log("Register Click")} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer:{
      padding:20,
      width:"100%"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline:{
      fontSize:18,
      fontWeight:"600",
      paddingVertical:20,
  }
});

export default WelcomeScreen;
