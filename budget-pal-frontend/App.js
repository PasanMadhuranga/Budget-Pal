import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SigninScreen from './app/screens/SigninScreen';
import SignupScreen from './app/screens/SignupScreen';
import PopupMenu from './app/components/PopupMenu';

export default function App() {
  return (
    <View >
      <PopupMenu />

    </View>
  );
}


