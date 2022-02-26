import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import home from "./static/images/home.png";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent title='title' desc='description' />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Image source={home} /> */}
      <FooterComponent />
    </View>
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
