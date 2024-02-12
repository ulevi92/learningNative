import { FC, PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../colors/colors";

const Title: FC<PropsWithChildren> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    // alignSelf: "stretch",
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 32,
    color: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    padding: 12,
    borderRadius: 4,
  },
});
