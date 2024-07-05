import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignupScreen from './app/screens/SignupScreen';

export default function App() {
  return (
    <View >
      <SignupScreen></SignupScreen>

    </View>
  );
}


