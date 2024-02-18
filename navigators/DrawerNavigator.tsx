import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { RootDrawerParams } from "../types/RootTypes";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "#fff",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: "#fff",
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1",
    }}
  >
    <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='list' color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='star' color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
