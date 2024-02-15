import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FC, useLayoutEffect } from "react";
import { MealDetailScreenProps } from "../types/RootTypes";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import MealDetailList from "../components/ MealDetail/MealDetailList";
import SubTitle from "../components/ MealDetail/SubTitle";
import NavigationButton from "../components/NavigationButton";

const MealDetailScreen: FC<MealDetailScreenProps> = ({ route, navigation }) => {
  const mealId = route.params.mealId;

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavigationButton icon='star' color={"white"} onPress={() => {}} />
      ),
    });
  }, [navigation]);

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
