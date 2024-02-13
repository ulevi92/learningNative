import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export type GoalType = { text: string; id: number };

export default function App() {
  return (
    <>
      <StatusBar style='inverted' />

      <View style={styles.rootContainer}>
        <Text>Hello World</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
