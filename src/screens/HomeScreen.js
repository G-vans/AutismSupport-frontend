import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { Logo } from './assets/logo.png'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010c80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 400,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
});
