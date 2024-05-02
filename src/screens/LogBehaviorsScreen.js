import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LogBehaviorsScreen = ({ navigation }) => {
  const [communication, setCommunication] = useState('');
  const [behaviorDetails, setBehaviorDetails] = useState('');
  const [meltdowns, setMeltdowns] = useState('');
  const [socialIteractions, setSocialIteractions] = useState('');
  const [behaviorLearn, setBehaviorLearn] = useState('');

  // const handleLogBehaviors = () => {
  //   // navigation.navigate('BehaviorAnalysis');
  // };

  const handleSubmit = async () => {
    const behaviorData = {
      communication,
      behaviorDetails,
      meltdowns,
      socialIteractions,
      behaviorLearn,
    };

    try {
      const response = await fetch('http://192.168.100.16:3000/log-behavior', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(behaviorData),
      });

      const result = await response.json();
      console.log('Behavior data saved:', result);
      navigation.navigate('BehaviorAnalysis');
    } catch (error) {
      console.error('Error saving behavior data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Log Your Child's Behaviors</Text>
      <View style={styles.formGroup}>
        <Text style={styles.fieldLabel}>Communication:</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe communication patterns"
          value={communication}
          onChangeText={setCommunication}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.fieldLabel}>Behavior Details:</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe specific behaviors"
          value={behaviorDetails}
          onChangeText={setBehaviorDetails}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.fieldLabel}>Meltdowns:</Text>
        <TextInput
          style={styles.input}
          placeholder="Frequency and triggers"
          value={meltdowns}
          onChangeText={setMeltdowns}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.fieldLabel}>Social Interactions:</Text>
        <TextInput
          style={styles.input}
          placeholder="Interactions with peers and adults"
          value={socialIteractions}
          onChangeText={setSocialIteractions}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.fieldLabel}>Learning Behaviors:</Text>
        <TextInput
          style={styles.input}
          placeholder="Has your child's learning be affected?"
          value={behaviorLearn}
          onChangeText={setBehaviorLearn}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#6666ff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LogBehaviorsScreen;
