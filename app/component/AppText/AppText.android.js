import React from "react";
import { Text, StyleSheet } from "react-native";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 22,
    fontFamily: "Roboto",
  },
});
export default AppText;
