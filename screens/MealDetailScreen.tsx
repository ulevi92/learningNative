import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FC, useLayoutEffect } from "react";
import { MealDetailScreenProps } from "../types/RootTypes";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import MealDetailList from "../components/ MealDetail/MealDetailList";
import SubTitle from "../components/ MealDetail/SubTitle";
import NavigationButton from "../components/NavigationButton";
import { useFavoriteContext } from "../store/context/favoriteContext";
import { useAppDispatch, useAppSelector } from "../store/redux/hook/reduxHook";
import {
  addFavorite,
  removeFavorite,
} from "../store/redux/features/FavoriteSlice";

const MealDetailScreen: FC<MealDetailScreenProps> = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  // const { removeFavorite, addFavorite, ids } = useFavoriteContext();

  const ids = useAppSelector((state) => state.favorites.ids);
  const dispatch = useAppDispatch();

  const mealObject = MEALS.find((meal) => meal.id === mealId)!;

  const {
    affordability,
    categoryIds,
    complexity,
    duration,
    imageUrl,
    ingredients,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    steps,
    title,
  } = mealObject;

  const mealIsFavorite = ids.includes(mealId);

  const onFavoriteButtonPress = () => {
    if (mealIsFavorite) dispatch(removeFavorite(mealId));
    else dispatch(addFavorite(mealId));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavigationButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color={"white"}
          onPress={onFavoriteButtonPress}
        />
      ),
    });
  }, [navigation, onFavoriteButtonPress, mealIsFavorite]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: mealObject.imageUrl }} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        style={styles.detaileText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <SubTitle title='ingredients' />
          <MealDetailList list={ingredients} />

          <SubTitle title='steps' />
          <MealDetailList list={steps} />
        </View>
      </View>

      <View style={styles.bottomStyle} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  title: {
    color: "#fff",
    textAlign: "center",
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
  },

  detaileText: {
    color: "#fff",
  },

  text: {
    marginHorizontal: 8,
    padding: 2,
    color: "#fff",
  },

  listInnerContainer: {
    width: "80%",
  },

  listOuterContainer: {
    alignItems: "center",
  },

  bottomStyle: {
    height: 32,
  },
});
