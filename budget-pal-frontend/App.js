import { StatusBar } from "expo-status-bar";
import DashboardScreen from "./app/screens/DashboardScreen";
import ExpensesScreen from "./app/screens/ExpensesScreen";
import IncomeScreen from "./app/screens/IncomeScreen";
import ActivityScreen from "./app/screens/ActivityScreen";
import GoalsScreen from "./app/screens/GoalsScreen";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded, error] = useFonts({
    "AlegreyaSans-Bold": require("./app/assets/fonts/AlegreyaSans-Bold.ttf"),
    "AlegreyaSans-Medium": require("./app/assets/fonts/AlegreyaSans-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Expenses" component={ExpensesScreen} />
        <Stack.Screen name="Income" component={IncomeScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Register the main component of your application
AppRegistry.registerComponent(appName, () => App);
