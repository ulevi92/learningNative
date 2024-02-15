import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  list: string[];
}

const MealDetailList: FC<Props> = ({ list }) => {
  const renderList = list.map((item, index) => (
    <View style={styles.listItem} key={index}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));

  return renderList;
};

export default MealDetailList;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  text: {
    marginHorizontal: 8,
    padding: 2,
    color: "#351401",
    textAlign: "center",
  },
});
