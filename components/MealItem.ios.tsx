import { FC } from "react";
import Meal from "../models/meal";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useAppNavigation } from "../hooks/customHooks";

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
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.outerPressable, styles.onPress]
            : styles.outerPressable
        }
      >
        <View style={styles.ineerPressable}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />

            <Text style={styles.title}>{meal.title}</Text>
          </View>

          <View style={styles.mealDetails}>
            <Text>{meal.duration}m</Text>
            <Text style={styles.detailedText}>{meal.complexity}</Text>
            <Text style={styles.detailedText}>{meal.affordability}</Text>
          </View>
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
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  outerPressable: {
    flex: 1,
    elevation: 2,
  },

  ineerPressable: {
    flex: 1,
  },

  onPress: {
    opacity: 0.45,
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

  mealDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  detailedText: {
    marginHorizontal: 4,
    fontSize: 12,
    textTransform: "uppercase",
  },
});
