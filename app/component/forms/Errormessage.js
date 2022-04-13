import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

function Errormessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 17,
    paddingLeft:10
  },
});
export default Errormessage;
