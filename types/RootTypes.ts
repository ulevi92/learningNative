import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//root Types

export type RootStackParamListType = {
  MealCategories: undefined;
  MealOverView: { categoryId: string };
  MealDetailScreen: { mealId: string };
};

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListType,
  "MealOverView"
>;

// hooks Types

export type UseAppNavigationType =
  NativeStackNavigationProp<RootStackParamListType>;

export type UseAppRouteType = RouteProp<RootStackParamListType>;

//screens Prop Types

export interface MealOverViewScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<RootStackParamListType, "MealOverView">;
}

export interface CatergpriesScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<RootStackParamListType, "MealCategories">;
}

export interface MealDetailScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<RootStackParamListType, "MealDetailScreen">;
}
