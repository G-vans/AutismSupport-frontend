import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hi, Parent!</Text>
      <Text style={styles.caption}>
        Welcome to AutismSupport! We're here to help you support your loved ones.
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Emotion Tagging')}>
          <View style={styles.buttonContent}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../images/emotion.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.buttonText}>Emotion Tagging</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Log Behaviors')}>
          <View style={styles.buttonContent}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../images/activity.jpg')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.buttonText}>Activity Tracking</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../images/community.jpg')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.buttonText}>Connect with Community</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  caption: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    width: 300,
  },
  buttonsContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6666ff',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
