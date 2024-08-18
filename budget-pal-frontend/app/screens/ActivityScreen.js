import React, { useState, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  DrawerLayoutAndroid,
  Dimensions,
  ScrollView,
  SectionList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import SideBar from "../components/SideBar.js";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const DATA = [
  {
    title: "Today",
    data: ["Personal", "Groceries", "Education"],
  },
  {
    title: "Yesterday",
    data: ["Travel", "Groceries", "Health"],
  },
  {
    title: "10th July",
    data: ["Groceries", "Food", "Personal"],
  },
  {
    title: "1st July",
    data: ["Hotel Stay", "Travel"],
  },
];

const renderItemIcon = (item) => {
  // Define your icon selection logic based on item.type
  switch (item) {
    case "Food":
      return <Icon name="hamburger" size={30} />;
    case "Groceries":
      return (
        <View style={[styles.icon, { backgroundColor: "#D67BFF" }]}>
          <Icon name="shopping-cart" size={30} />
        </View>
      );
    case "Travel":
      return <Icon name="car-side" size={30} style={styles.icon} />;
    case "Health":
      return <Icon name="hospital" size={30} style={styles.icon} />;
    case "Hotel Stay":
      return <Icon name="umbrella-beach" size={30} style={styles.icon} />;
    case "Personal":
      return <Icon name="user-alt" size={30} style={styles.icon} />;
    default:
      return null; // Return null if no matching type
  }
};

const ListRoute = () => (
  <SectionList
    style={styles.scene}
    sections={DATA}
    ItemSeparatorComponent={() => (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#D9D9D9",
          alignSelf: "center",
        }}
      />
    )}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => (
      <View style={styles.item}>
        {renderItemIcon(item)}
        <Text style={styles.title}>{item}</Text>
      </View>
    )}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.sectionHeader}>{title}</Text>
    )}
  />
);
const GraphRoute = () => (
  <ScrollView style={styles.scene}>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
  </ScrollView>
);

function ActivityScreen({ navigation }) {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
  const [index, setIndex] = useState(0); // State for tab index
  const [routes] = useState([
    { key: "first", title: "List View" },
    { key: "second", title: "Graph View" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "black" }} // Adjust the indicator color
      style={{ backgroundColor: "white" }} // Change the background color to white
      labelStyle={{ color: "black" }} // Change the label color
    />
  );

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

        <Text style={styles.textTopic}>Activities</Text>

        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            first: ListRoute,
            second: GraphRoute,
          })}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get("window").width }}
        />
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
  scene: {
    flex: 1,
    paddingTop: 15,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 8,
    marginLeft: 8,
    flexDirection: "row", // Arrange items horizontally
  },
  title: {
    fontSize: 14,
    fontFamily: "AlegreyaSans-Bold",
  },
  sectionHeader: {
    backgroundColor: "#FAF8F4",
    fontSize: 16,
    color: "#C9C6C1",
  },
  icon: {
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityScreen;
