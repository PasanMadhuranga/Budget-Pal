import React, { useState, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  DrawerLayoutAndroid,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SearchBar } from "react-native-elements";
import SideBar from "../components/SideBar.js";

function DashboardScreen({ navigation }) {
  const [titleText, setTitleText] = useState("Piggy");
  const [search, setSearch] = useState("");
  const [searchResponse, setResponse] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const performSearch = () => {
    setSearchPerformed(true);
    setResponse("You have spent a lot this time buddy :P");
  };

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

        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          lightTheme
          round
          containerStyle={styles.searchbar}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onSubmitEditing={performSearch}
        />
        <View style={styles.space}>
          {searchPerformed && search ? (
            <Text style={styles.textPara}>
              Here's what we found: {searchResponse}
            </Text>
          ) : null}
        </View>

        <View style={styles.pageNav}>
          <Pressable
            onPress={() => navigation.navigate("Expenses")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#45FFCA",
              },
              styles.pressable,
            ]}
          >
            <Text style={styles.buttonText}> Expenses</Text>
            <Icon name="coins" size={30}></Icon>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Income")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#FFCA64",
              },
              styles.pressable,
            ]}
          >
            <Text style={styles.buttonText}> Income</Text>
            <Icon name="money-check" size={30}></Icon>
          </Pressable>
        </View>

        <View style={styles.pageNav}>
          <Pressable
            onPress={() => navigation.navigate("Activity")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#FCA5B5",
              },
              styles.pressable,
            ]}
          >
            <Text style={styles.buttonText}> Activity</Text>
            <Icon name="credit-card" size={30}></Icon>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Goals")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#D67BFF",
              },
              styles.pressable,
            ]}
          >
            <Text style={styles.buttonText}> Goals</Text>
            <Icon name="piggy-bank" size={30}></Icon>
          </Pressable>
        </View>
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
  pageNav: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space between items
    alignItems: "center", // Center items vertically
    padding: "4%",
  },
  textTopic: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AlegreyaSans-Bold",
  },
  pressable: {
    height: 120,
    width: 145,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "AlegreyaSans-Bold",
    textAlign: "center",
  },
  textPara: {
    fontSize: 16,
    fontFamily: "AlegreyaSans-Medium",
    padding: "10%",
    color: "black",
  },
  searchbar: {
    height: 70, // Adjust the height of the container
    backgroundColor: "#FFFFFF",
    margin: 8,
  },
  space: {
    backgroundColor: "#BDC6CF",
    borderRadius: 10,
    overflow: "hidden",
  },
  inputContainer: {
    height: 45, // Adjust the height of the input container
  },
  input: {
    fontSize: 16, // Adjust the font size of the input text
  },
});

export default DashboardScreen;
