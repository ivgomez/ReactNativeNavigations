import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../components/HeaderButton";

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The FilterScreen screen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FilterScreen;
