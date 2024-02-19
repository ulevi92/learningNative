import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import AddExpenseScreen from "../screens/stack/AddExpenseScreen";
import RemoveExpenseScreen from "../screens/stack/RemoveExpenseScreen";
import appColors from "../colors/colors";
import { RootNativeStackParams } from "../types/NavigatorsTypes";

const Stack = createNativeStackNavigator<RootNativeStackParams>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: appColors.primary },
          contentStyle: { backgroundColor: appColors.background.main },
          headerTintColor: appColors.text.primary,
          animation: "slide_from_bottom",
          title: "",
        }}
      >
        <Stack.Screen
          name='Tabs'
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen name='AddExpense' component={AddExpenseScreen} />

        <Stack.Screen name='Expense' component={RemoveExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
