import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screems/ViewImageScreen";
import WelcomeScreen from "./app/screems/WelcomeScreen";

import AppText from "./app/component/AppText";
import AppButton from "./app/component/Button";
import Card from "./app/component/Card/Card";
import ListingDetailsScreen from "./app/screems/ListingDetailsScreen";
import MessageScreen from "./app/screems/MessageScreen";
import Screen from "./app/component/Screen";
import Icon from "./app/component/Icon";
import ListItem from "./app/component/ListItem";
import AccountScreen from "./app/screems/AccountScreen";
import ListingScreen from "./app/screems/ListingScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/component/AppTextInput";
import colors from "./app/config/colors";
import AppPicker from "./app/component/AppPicker";
import LoginScreen from "./app/screems/LoginScreen";

const categories = [
  { label: "Furnitue", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsnew] = useState(false);
  const [category, setCategory]= useState(categories[0]);
  return (
    <LoginScreen />
    // <Screen>
    //   <AppTextInput placeholder="Username" icon="email" />
    //   <Switch value={isNew} onValueChange={(newValue) => setIsnew(newValue)} />
    //   <AppPicker
    //    icon="apps" 
    //    placeholder="Category"
    //    selectedItem={category}
    //    onSelectItem={item=> setCategory(item)}
    //   items={categories} />
    // </Screen>
    // <AccountScreen />
    // <ListingScreen />
    // <MessageScreen />
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   {/* <Card
    //     title="Red Jacket for sale"
    //     subTitle="$120.99"
    //     image={require("./app/assets/jacket2.jpg")}
    //   /> */}
    //   <ListingDetailsScreen />
    // </View>

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton title="Login" onPress={()=> console.log("Button Clicked") } />
    // </View>
  );
}
