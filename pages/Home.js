import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

import HeaderComponent from "../components/HeaderComponent";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Events Happening around you",
    image: require('../static/images/events_home.png')
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Learn",
    image: require('../static/images/learn_home.png')
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Rewards",
    image: require('../static/images/rewards_home.png')
  },
];


const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <ImageBackground
      source={item.image}
      style={styles.containerImage}
    >
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? 'lightblue' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
      />
    );
  };

  return (

    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Home" desc="" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 150
  },
  title: {
    fontSize: 28,
    fontFamily: 'Gotham',
    textAlign: 'center',
    paddingTop: 40
  },
  containerImage: {
    resizeMode: 'contain',
    height: 150
  }
});

export default Home;