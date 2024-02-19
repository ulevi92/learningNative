import { StyleSheet, Text, View } from "react-native";
import { defaultContainerProps } from "../../colors/colors";
import { FC } from "react";
import { RecentScreenProps } from "../../types/NavigatorsTypes";
import ExpensesCard from "../../components/expenses/ExpensesCard";

const RecentScreen: FC<RecentScreenProps> = ({ navigation }) => {
  const onExpenseCardPress = () => {
    navigation.navigate("Expense", { expenseId: "" });
  };

  return (
    <View style={[defaultContainerProps.default, styles.root]}>
      <Text>Recent Tab</Text>

      {/* <ExpensesCard /> */}
    </View>
  );
};

export default RecentScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
