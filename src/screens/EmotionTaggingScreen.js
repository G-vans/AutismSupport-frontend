import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmotionTaggingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>
        Choose an option to tag emotions:
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Upload Photo')}
      >
        <Text style={styles.buttonText}>Connect Wearable</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Describe Emotions')}
      >
        <Text style={styles.buttonText}>Describe Emotions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6666ff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmotionTaggingScreen;
