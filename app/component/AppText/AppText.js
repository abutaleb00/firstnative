import React from "react";
import { Text} from "react-native";
import defaultStyle from "../../config/styles";
function AppText({ children, style,...othersProp }) {
  return (
    <Text {...othersProp} style={[defaultStyle.text, style]} >
      {children}
    </Text>
  );
}

export default AppText;
