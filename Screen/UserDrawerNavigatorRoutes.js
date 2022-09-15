// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import UserHomeScreen from "./DrawerScreens/HomeScreen";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="UserHomeScreen">
      <Stack.Screen
        name="UserHomeScreen"
        component={UserHomeScreen}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const UserDrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      // drawerContentOptions={{
      //   activeTintColor: "#cee1f2",
      //   color: "#cee1f2",
      //   itemStyle: { marginVertical: 5, color: "white" },
      //   labelStyle: {
      //     color: "#d8d8d8",
      //   },
      // }}
      screenOptions={{
        activeTintColor: "black",
        color: "black",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#021617",
        },
        headerShown: false,
      }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="HomeScreenStack"
        options={{ drawerLabel: "Home Screen" }}
        component={HomeScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default UserDrawerNavigatorRoutes;
