import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home/Home';
import Routes from './src/routes/Routes';

export default function App() {
  return (

    <View style={styles.container}>
      <Routes />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 30,
  },
});
