import { FC } from "react";
import {
  OpaqueColorValue,
  Pressable,
  StyleSheet,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IoniconsIconNameType = keyof typeof Ionicons.glyphMap;

interface Props {
  icon: IoniconsIconNameType;
  onPress: () => void;
  color: OpaqueColorValue | string;
}

const NavigationButton: FC<Props> = ({ icon, onPress, color }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
