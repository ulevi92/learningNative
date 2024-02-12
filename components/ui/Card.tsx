import { FC, PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../../colors/colors";

const Card: FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default Card;

const devideWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    marginTop: devideWidth < 400 ? 18 : 36,
    marginHorizontal: 12,
    padding: 24,
    backgroundColor: colors.purple,
    borderRadius: 16,
    elevation: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    minWidth: "80%",
  },
});
