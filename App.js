import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// import HeaderComponent from "./components/HeaderComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home.js";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <View style={styles.container}> */}
        {/* <HeaderComponent title="title" desc="description" /> */}
        {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        {/* <Image source={home} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // // alignItems: "center",
    // justifyContent: "center",
  },
});
