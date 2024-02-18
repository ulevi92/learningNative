import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//root Types

export type RootDrawerParams = {
  Categories: undefined;
  Favorites: undefined;
};

export type RootStackParamListType = {
  Drawer: undefined;
  MealOverView: { categoryId: string };
  MealDetailScreen: { mealId: string };
};

type ScreenStackNavigationProp = NativeStackNavigationProp<
  RootStackParamListType,
  "MealOverView"
>;

type ScreenDrawerNavigationProp = DrawerNavigationProp<RootDrawerParams>;

type CombinedNavigationProps = CompositeNavigationProp<
  ScreenStackNavigationProp,
  ScreenDrawerNavigationProp
>;

// hooks Types

export type UseAppNavigationType =
  NativeStackNavigationProp<RootStackParamListType>;

export type UseAppRouteType = RouteProp<RootStackParamListType>;

//screens Prop Types
export interface CatergpriesScreenProps {
  navigation: CombinedNavigationProps;
  route: RouteProp<RootDrawerParams, "Categories">;
}

export interface MealOverViewScreenProps {
  navigation: CombinedNavigationProps;
  route: RouteProp<RootStackParamListType, "MealOverView">;
}

export interface MealDetailScreenProps {
  navigation: CombinedNavigationProps;
  route: RouteProp<RootStackParamListType, "MealDetailScreen">;
}
