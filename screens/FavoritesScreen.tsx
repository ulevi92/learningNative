import { StyleSheet, Text, View } from "react-native";
import { useFavoriteContext } from "../store/context/favoriteContext";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { ScrollView } from "react-native-gesture-handler";
import { useAppSelector } from "../store/redux/hook/reduxHook";

const FavoritesScreen = () => {
  // const { ids } = useFavoriteContext();
  const ids = useAppSelector((state) => state.favorites.ids);

  const favMeals = MEALS.filter((meal) => ids.includes(meal.id));

  const renderMeals = favMeals.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  const defaultMessage = (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>There are nothing in your favorites</Text>
    </View>
  );

  const content =
    renderMeals.length < 1 ? (
      defaultMessage
    ) : (
      <ScrollView>{renderMeals}</ScrollView>
    );

  return <>{content}</>;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
