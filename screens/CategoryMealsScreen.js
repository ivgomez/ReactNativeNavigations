import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const { navigation } = props;
  const catId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go back!"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;