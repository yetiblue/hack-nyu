import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { View, Text } from "react-native";
function ExplorePage() {
  return (
    <View>
      <HeaderComponent title="Learn" desc="Select A Culture to Learn About" />
      <FooterComponent />
    </View>
  );
}
export default ExplorePage;
