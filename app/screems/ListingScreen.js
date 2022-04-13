import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../component/Card/Card";
import Screen from "../component/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket2.jpg"),
  },
  {
    id: 2,
    title: "Black Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    marginTop:20
  },
});

export default ListingScreen;
