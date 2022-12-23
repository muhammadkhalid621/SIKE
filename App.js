import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./Screen/SplashScreen";
import LoginScreen from "./Screen/LoginScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import UserDrawerNavigationRoutes from "./Screen/UserDrawerNavigatorRoutes";
import PsychiratristDrawerNavigationRoutes from "./Screen/PsychiatristDrawerNavigatorRoutes";
import QuizScreen from "./Screen/QuizScreen";
import UserHomeScreen from "./Screen/DrawerScreens/HomeScreen";
import {
  PTSDQuiz,
  DepressionQuiz,
  AnxietyQuiz,
  EatingQuiz,
  AddictionQuiz,
  StealingQuiz,
  BurningDisorder,
  BiPolarDisorder,
} from "./Screen/AllQuizScreens";
import ChatScreen from "./Screen/ChatScreen";
import NotesScreen from "./Screen/CreateNoteScreen";
import MoodScreen from "./Screen/MoodScreen";
import PsychiatristLocation from "./Screen/PsychiatristLocation";
import Facial from "./Screen/Facial";
import Speech from "./Screen/Speech";

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
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

const Home = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="UserHomeScreen">
      <Stack.Screen
        name="UserHomeScreen"
        component={UserHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          title: "Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "Chat", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PsychiatristScreen"
        component={PsychiatristLocation}
        options={{
          title: "Finder", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PTSDQuiz"
        component={PTSDQuiz}
        options={{
          title: "PTSD Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="DepressionQuiz"
        component={DepressionQuiz}
        options={{
          title: "Depression Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="AnxietyQuiz"
        component={AnxietyQuiz}
        options={{
          title: "Anxiety Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="EatingQuiz"
        component={EatingQuiz}
        options={{
          title: "Eating Disorder Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="AddictionQuiz"
        component={AddictionQuiz}
        options={{
          title: "Addiction Disorder Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="StealingQuiz"
        component={StealingQuiz}
        options={{
          title: "Stealing Disorder Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="BurningDisorder"
        component={BurningDisorder}
        options={{
          title: "Burining Disorder Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="BiPolarDisorder"
        component={BiPolarDisorder}
        options={{
          title: "Bipolar Disorder Quiz", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={{
          title: "Notes", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="MoodScreen"
        component={MoodScreen}
        options={{
          title: "Mood", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={Facial}
        options={{
          title: "Image", //Set Header Title
          headerStyle: {
            backgroundColor: "#13c6d2", //Set Header color
          },
          headerTintColor: "#021617", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

<Stack.Screen
        name="SpeechScreen"
        component={Speech}
        options={{
          title: "Speech", //Set Header Title
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

// const Anxiety_Quiz = () => {
//   // Stack Navigator for Login and Sign up Screen
//   return (
//     <Stack.Navigator initialRouteName="QuizScreen">
//       <Stack.Screen
//         name="QuizScreen"
//         component={QuizScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="AnxietyQuiz"
//         component={AnxietyQuiz}
//         options={{
//           title: "Anxiety Quiz", //Set Header Title
//           headerStyle: {
//             backgroundColor: "#13c6d2", //Set Header color
//           },
//           headerTintColor: "#021617", //Set Header text color
//           headerTitleStyle: {
//             fontWeight: "bold", //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="UserDrawerNavigationRoutes"
          component={UserDrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PsychiratristDrawerNavigationRoutes"
          component={PsychiratristDrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {/* <Stack.Screen
        name="Anxiety_Quiz"
        component={Anxiety_Quiz}
        // Hiding header for Navigation Drawer
        options={{ headerShown: false }}
      /> */}
    </NavigationContainer>
  );
};

export default App;
