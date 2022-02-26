import React from "react";
import { Alert, StyleSheet, Button, Text, View } from 'react-native';


const HeaderComponent = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.button} >
        <Button title="<" onPress={() => Alert.alert(
          'placeholder')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    paddingLeft: 15,
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: 30
  },
  desc: {
    fontSize: 15
  }
});


export default HeaderComponent;