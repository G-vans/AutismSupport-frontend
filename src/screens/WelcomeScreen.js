import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Welcome copy */}
      <Text style={styles.welcomeText}>
        Welcome to AutismSupport! We're here to help you support your loved ones.
      </Text>

      {/* Buttons functions */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Emotion Tagging')}
        >
          <Text style={styles.buttonText}>Emotion Taging</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Activity Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect with Community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
