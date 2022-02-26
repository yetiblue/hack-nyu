import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useState } from "react";
function FooterComponent() {
  const [images, setImages] = useState([
    require("../static/images/home.png"),
    require("../static/images/search.png"),
    require("../static/images/learn.png"),
    require("../static/images/rewards.png"),
  ]);
  const styles = StyleSheet.create({
    container: {
      //   width: 400,
      alignSelf: "stretch",
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      flex: 1,
      padding: 15,
      paddingTop: 20,
      paddingBottom: 20,

      //   flex: 1,
      //   padding: 40,
    },
    containerImage: {
      //   backgroundColor: "green",
      height: 40,
      width: 40,
    },
  });
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        horizontal={true}
        data={images}
        renderItem={({ item, index }) => (
          <Image
            style={styles.containerImage}
            source={item} /* Use item to set the image source */
            key={
              index
            } /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
          />
        )}
      ></FlatList>
      {/* <Image source={require(photoUrl)} /> */}
    </View>
  );
}

export default FooterComponent;
