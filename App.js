import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screems/ViewImageScreen";
import WelcomeScreen from "./app/screems/WelcomeScreen";

import AppText from "./app/component/AppText";
import AppButton from "./app/component/Button";
import Card from "./app/component/Card/Card";
import ListingDetailsScreen from "./app/screems/ListingDetailsScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      {/* <Card
        title="Red Jacket for sale"
        subTitle="$120.99"
        image={require("./app/assets/jacket2.jpg")}
      /> */}
      <ListingDetailsScreen />
    </View>

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton title="Login" onPress={()=> console.log("Button Clicked") } />
    // </View>
  );
}
