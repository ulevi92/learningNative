import { FC } from "react";
import Meal from "../models/meal";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useAppNavigation } from "../hooks/customHooks";
import MealDetails from "./MealDetails";

interface Props {
  meal: Meal;
}

const MealItem: FC<Props> = ({ meal }) => {
  const navigation = useAppNavigation();

  const onPress = () => {
    navigation.navigate("MealDetailScreen", { mealId: meal.id });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.outerPressable}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.outerPressable}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />

            <Text style={styles.title}>{meal.title}</Text>
          </View>

          <MealDetails
            affordability={meal.affordability}
            complexity={meal.complexity}
            duration={meal.duration}
          />

          <View></View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
  },

  outerPressable: {
    flex: 1,
    elevation: 2,
  },

  ineerPressable: {
    flex: 1,
  },

  mealHeader: { flex: 1 },

  title: {
    textAlign: "center",
    marginBottom: 16,

    fontSize: 24,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 200,
  },
});
