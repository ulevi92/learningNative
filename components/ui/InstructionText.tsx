import { FC, PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../../colors/colors";

interface Props extends PropsWithChildren {
  style?: StyleProp<TextStyle>;
}

const InstructionText: FC<Props> = ({ children, style }) => {
  return <Text style={[style, styles.title]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  title: {
    color: colors.orange,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
  },
});
