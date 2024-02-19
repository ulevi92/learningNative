// colors.ts

import { StyleSheet } from "react-native";

const appColors = {
  primary: "#5C9DDF", // Slightly darker shade of blue
  secondary: "#FFA07A", // Light Salmon, for a warm contrast
  background: {
    main: "#E6F0FA", // Lighter shade of the new primary for background
    card: "#D1E0F2", // Even lighter shade for card backgrounds
  },
  text: {
    primary: "#2E3D49", // Darker blue-gray, for enhanced readability on lighter backgrounds
    secondary: "#546E7A", // Lighter blue-gray
  },
  error: "#FF5252", // Red Accent-2, remains the same for consistency
  success: "#48A192", // Adjusted to a softer green, harmonizing with the darker blue
  warning: "#FFA726", // Orange, for a clear warning indication
  tab: {
    active: {
      background: "#5C9DDF", // Using the new primary color
      text: "#FFFFFF", // White, for clear visibility
    },
    inactive: {
      background: "#B0D3F2", // A softer version of the primary
      text: "#000", // A muted blue, ensuring readability and aesthetic contrast
    },
  },
};

export default appColors;

export const defaultContainerProps = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: appColors.background.main,
  },
});
