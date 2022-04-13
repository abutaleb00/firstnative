import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../component/ListItem";
import Constants from "expo-constants";
import Screen from "../component/Screen";
import ListItemSeperator from "../component/ListItemSeparator";
import ListItemDeletAction from "../component/ListItemDeletAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/user.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D35",
    image: require("../assets/user.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, SetMessages] = useState(initialMessages);
  const [refreshing, SetRefreshing] = useState(false);

  const handlDelete = (message) => {
    SetMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Select", item)}
            renderRightActions={() => (
              <ListItemDeletAction onPress={() => handlDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          SetMessages([
            {
              id: 3,
              title: "T3",
              description: "D35",
              image: require("../assets/user.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  icons: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "red",
    width: 70,
  },
});

export default MessageScreen;
