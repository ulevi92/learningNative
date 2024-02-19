import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RecentScreen from "../screens/tab/RecentScreen";
import AllExpensesScreen from "../screens/tab/AllExpensesScreen";
import appColors from "../colors/colors";

import { Ionicons } from "@expo/vector-icons";
import { RootTabsParams, TabNavigatorProps } from "../types/NavigatorsTypes";

import TabAddExpenseIcon from "../components/tab/TabAddExpenseIcon";
import { FC } from "react";

const Tab = createBottomTabNavigator<RootTabsParams>();

const TabNavigator: FC<TabNavigatorProps> = ({ navigation }) => {
  const onRecentButtonPress = () => navigation.navigate("AddExpense");

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: appColors.primary },
        headerTintColor: appColors.text.primary,
        tabBarStyle: { backgroundColor: appColors.primary },
        tabBarActiveBackgroundColor: appColors.tab.active.background,
        tabBarActiveTintColor: appColors.tab.active.text,
        tabBarInactiveBackgroundColor: appColors.tab.inactive.background,
        tabBarInactiveTintColor: appColors.tab.inactive.text,
        headerRight: ({ tintColor }) => (
          <TabAddExpenseIcon
            tintColor={tintColor}
            onPress={onRecentButtonPress}
          />
        ),
      }}
    >
      <Tab.Screen
        name='Recent'
        component={RecentScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name='AllExpenses'
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
