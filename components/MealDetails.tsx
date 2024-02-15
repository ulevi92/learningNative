import { FC } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

interface Props {
  duration: number;
  complexity: string;
  affordability: string;
  style?: StyleProp<TextStyle>;
}

const MealDetails: FC<Props> = ({
  duration,
  affordability,
  complexity,
  style,
}) => (
  <View style={styles.mealDetails}>
    <Text style={[styles.detailedText, style]}>{duration}m</Text>
    <Text style={(styles.detailedText, style)}>{complexity}</Text>
    <Text style={(styles.detailedText, style)}>{affordability}</Text>
  </View>
);

export default MealDetails;

const styles = StyleSheet.create({
  mealDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  detailedText: {
    marginHorizontal: 4,
    fontSize: 12,
    textTransform: "uppercase",
  },
});
