import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.welcomeText}>
        {/* <Text style={styles.heading}>Welcome</Text> */}
        <Text style={styles.tagline}>Your Budget Companion, Always in Sync</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Sign Up" onPress={() => console.log("tapped")} color="purple" />
        <AppButton title="Sign In" onPress={() => console.log("tapped")} color="pink" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: height * 0.03, // 10% from the top
    alignItems: "center",
  },
  logo: {
    width: 410, // 80% of screen width
    height: 410, // 30% of screen height
    resizeMode: "contain",

  },
  welcomeText: {
    position: "absolute",
    top: height * 0.50, // 45% from the top
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
  buttonsContainer: {
    position: "absolute",
    top: height * 0.7, // 10% from the bottom
    padding: 20,
    width: '100%',
    alignItems: "center",
  },
});

export default WelcomeScreen;
