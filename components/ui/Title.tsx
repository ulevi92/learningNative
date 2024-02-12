import { FC, PropsWithChildren } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { colors } from "../../colors/colors";

const Title: FC<PropsWithChildren> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 32,
    color: colors.white,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: colors.white,
    padding: 24,
    borderRadius: 4,
    minWidth: "90%",
  },
});
