// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import HomeScreen from "./PsychiatristScreen/HomeScreen";
import ModelScreen from "./PsychiatristScreen/ModelScreen";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ModelScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ModelScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="ModelScreen"
        component={ModelScreen}
        options={{
          title: "Quiz", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};


const PsychiatristDrawerNavigatorRoutes = (props) => {
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
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#d8d8d8",
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
      <Drawer.Screen
        name="ModelScreenStack"
        options={{ drawerLabel: "Model Screen" }}
        component={ModelScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default PsychiatristDrawerNavigatorRoutes;
