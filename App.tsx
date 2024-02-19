import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigators/StackNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";

export type GoalType = { text: string; id: number };

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}
