
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent title='title' desc='description' />
      <Text>ashdfjkfaj</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
