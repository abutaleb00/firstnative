import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../component/Icon";

import ListItem from "../component/ListItem";
import ListItemSeparator from "../component/ListItemSeparator";
import Screen from "../component/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}> 
      <ListItem
          title="Abu Taleb"
          subTitle="abutaleb@gmail.com"
          image={require("../assets/user.jpg")}
        />
      </View>
        
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem 
      title="Log Out"
      IconComponent={
      <Icon 
      name="logout" 
      size={40}
      backgroundColor={colors.danger} 
      />
    }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen:{
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
