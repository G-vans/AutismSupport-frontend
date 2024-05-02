import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import * as GoogleGenerativeAI from "@google/generative-ai";
import { API_KEY } from '@env'

// const API_KEY = config.API_KEY;

const DescribeEmotionsScreen = ({ navigation }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptSubmit = async () => {
    try {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const userChildDescription = prompt.trim(); // Trim the user input

      // Append prompt for parent with autistic child context
      const fullPrompt = `**This prompt is regarding a child with autism.Please provide a suggestion on what this parent can do based on the behavior ,**\n${userChildDescription}`;

      const result = await model.generateContent(fullPrompt);
      const response = await result.response;
      const text = response.text();

      //const summarizedResponse = text.split('.')[0]; // Split by sentences and get first one

      setResponse(text);
    } catch (error) {
      console.error('Error generating AI content:', error);
      setResponse('Failed to retrieve response. Please try again.');
      Alert.alert('Error', 'Failed to generate AI content. Please try again.');
    }
  };

  const renderBoldText = (text) => {
    // Remove all asterisks (*) and replace with empty strings
    return text.replace(/\*/g, '');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lets help you connect better with you child!</Text>
      <Text style={styles.description}>
        Describe the emotions your child is exhibiting, and get suggestions on how to handle the situation.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Describe your child's emotions..."
        multiline
        value={prompt}
        onChangeText={setPrompt}
      />
      <TouchableOpacity style={styles.button} onPress={handlePromptSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {response ? (
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>{renderBoldText(response)}</Text>
        </View>
      ) : null}
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
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#6666ff',
    borderRadius: 10,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  responseContainer: {
    marginTop: 40,
    padding: 20,
    borderColor: '#007BFF',
    borderRadius: 10,
  },
  responseText: {
    fontSize: 16,
  },
});

export default DescribeEmotionsScreen;
