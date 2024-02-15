import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}

const SubTitle: FC<Props> = ({ title }) => (
  <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{title}:</Text>
  </View>
);

export default SubTitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomWidth: 2,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
  },

  subTitle: {
    textTransform: "capitalize",
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
    margin: 4,
  },
});
