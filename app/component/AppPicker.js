import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  numberOfColumn=1,
  selectedItem,
  width = "100%",
}) {
  const [modalVisiable, setModalVisiable] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisiable(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            style={{ paddingTop: 4 }}
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisiable} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisiable(false)} />
          <FlatList
            data={items}
            horizontal={false}
            numColumns={numberOfColumn}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                item={item}
                onPress={() => {
                  setModalVisiable(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
    fontSize: 18,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
    paddingTop: 5,
  },
});
export default AppPicker;
