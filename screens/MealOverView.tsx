import { MEALS } from "../data/dummy-data";

import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "../components/MealItem";
import { MealOverViewScreenProps } from "../types/RootTypes";
import { FC } from "react";
import { useAppNavigation } from "../hooks/customHooks";

const MealOverView: FC<MealOverViewScreenProps> = ({ route }) => {
  const categoryId = route.params.categoryId;

  const mealsByCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        keyExtractor={({ id }) => id}
        data={mealsByCategory}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default MealOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  list: {
    flex: 1,
  },
});
