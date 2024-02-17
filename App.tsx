import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export type GoalType = { text: string; id: number };

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User'>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} />

        <Drawer.Screen name='User' component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
