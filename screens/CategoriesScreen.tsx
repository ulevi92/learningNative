import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryCard from "../components/CatagoryCard.ios";
import { FC } from "react";
import { CatergpriesScreenProps } from "../types/RootTypes";

const CategoriesScreen: FC<CatergpriesScreenProps> = ({ navigation }) => {
  const handaleNavigation = (categoryId: string) => {
    navigation.navigate("MealOverView", { categoryId: categoryId });
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <CatagoryCard
          title={item.title}
          color={item.color}
          onPress={() => handaleNavigation(item.id)}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
