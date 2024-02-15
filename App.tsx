import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealOverView from "./screens/MealOverView";
import { RootStackParamListType } from "./types/RootTypes";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";
import NavigationButton from "./components/NavigationButton";

const Stack = createNativeStackNavigator<RootStackParamListType>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <SafeAreaView />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#3f2f25" },
            headerBackTitle: "Back",
          }}
        >
          <Stack.Screen
            name='MealCategories'
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
            }}
          />

          <Stack.Screen
            name='MealOverView'
            component={MealOverView}
            options={({ route }) => {
              const params = route.params.categoryId;
              const title = CATEGORIES.find(
                (category) => category.id === params
              )?.title;

              return { title };
            }}
          />

          <Stack.Screen
            name='MealDetailScreen'
            component={MealDetailScreen}
            options={({ route }) => {
              const params = route.params.mealId;
              const title = MEALS.find((meal) => meal.id === params)?.title;

              return { title };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     paddingHorizontal: 8,
//   },
// });
