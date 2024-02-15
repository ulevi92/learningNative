import { useNavigation, useRoute } from "@react-navigation/native";
import type { UseAppNavigationType, UseAppRouteType } from "../types/RootTypes";

export const useAppNavigation = () => useNavigation<UseAppNavigationType>();

export const useAppRoute = () => useRoute<UseAppRouteType>();
