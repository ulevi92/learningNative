import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type {
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";

export type RootNativeStackParams = {
  Tabs: undefined;
  AddExpense: undefined;
  Expense: { expenseId: string };
};

export type RootTabsParams = {
  Recent: undefined;
  AllExpenses: undefined;
};

type StackNavigatorProp = NativeStackNavigationProp<RootNativeStackParams>;

type TabNavigatorProp = BottomTabNavigationProp<RootTabsParams>;

type CombinedNavigatorProps = CompositeNavigationProp<
  StackNavigatorProp,
  TabNavigatorProp
>;

export type RecentScreenProps = {
  navigation: CombinedNavigatorProps;
  route: RouteProp<RootTabsParams, "Recent">;
};

export type TabNavigatorProps = {
  navigation: CombinedNavigatorProps;
  route: RouteProp<RootNativeStackParams, "Tabs">;
};
