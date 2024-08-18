import React from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  DrawerLayoutAndroid,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, useRef } from "react";
import SideBar from "../components/SideBar.js";

function ExpensesScreen({navigation}) {
  const [titleText, setTitleText] = useState("Piggy");

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => (
        <SideBar closeDrawer={() => drawer.current.closeDrawer()} />
      )}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/logos/BudgetPal_Transparent.png")}
            resizeMode="contain"
            onError={(error) => console.error("Image loading error:", error)}
            style={{ width: 100, height: 100 }}
          />

          <Icon.Button
            name="align-justify"
            onPress={() => drawer.current.openDrawer()}
            backgroundColor="#FFFFFF"
            color="#000000"
          />
        </View>

        <Text style={styles.textTopic}>Hi {titleText},</Text>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: "10%",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space between items
    alignItems: "center", // Center items vertically
  },
  textTopic: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AlegreyaSans-Bold",
  },
  textPara: {
    fontSize: 12,
    fontFamily: "AlegreyaSans-Light",
  },
});

export default ExpensesScreen;
