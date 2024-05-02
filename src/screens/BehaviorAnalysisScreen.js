import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as GoogleGenerativeAI from "@google/generative-ai";
import { API_KEY } from '@env';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButton, HeaderIconButton } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

const BACKEND_URL = 'http://192.168.100.16:3000/get-behavior-data';

const BehaviorAnalysisScreen = () => { 

  const [behaviorInsights, setBehaviorInsights] = useState('');

  useEffect(() => {
    const analyzeBehaviors = async () => {
      try {
        const behaviorData = await fetchBehaviorData();
        const formattedData = formatBehaviorData(behaviorData); // Extract relevant data

        const prompt = `**I have an autistic child . They ${formattedData}. As an AI, could you suggest a short plan for tomorrow that might help my child based on these behaviors?**`; //Modify the prompt to give better response

        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const insightsWithoutAsterisks = text.replace(/\*/g, ''); // Remove all asterisks with empty string
        setBehaviorInsights(insightsWithoutAsterisks);

        // setBehaviorInsights(text);
      } catch (error) {
        console.error('Error analyzing behaviors:', error);
        setBehaviorInsights('Failed to analyze behaviors. Please try again.');
      }
    };

    analyzeBehaviors();
  }, []);

  const fetchBehaviorData = async () => {
    try {
      const response = await fetch(BACKEND_URL);
      const behaviorData = await response.json();
      console.log(behaviorData);
      return behaviorData;
    } catch (error) {
      console.error('Error fetching behavior data:', error);
      return null;
    }
  };

  const formatBehaviorData = (data) => {
    const communication = data.communication || 'No information provided.';
    const meltdowns = data.meltdowns || 'No information provided.';
    const socialInteractions = data.socialInteractions || 'No information provided.';
    const behaviorDetails = data.behaviorDetails || 'No information provided.';
    const behaviorLearn = data.behaviorLearn || 'No information provided.';

    // Combine data for the prompt
    const formattedData = `Communication: ${communication}\nMeltdowns: ${meltdowns}\nSocial Interactions: ${socialInteractions}\nBehavior Details: ${behaviorDetails}\nBehavior Learned: ${behaviorLearn}`;
    return formattedData;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Behavior Analysis & Insights</Text>
      <Text style={styles.description}>Your data has been logged. Please check below suggestions on how to improve tomorrow based on today's behaviors:</Text>
      <Text style={styles.insights}>{behaviorInsights}</Text>
    </ScrollView>
  );
};

BehaviorAnalysisScreen.navigationOptions = ({ navigation }) => ({
  
  headerRight: () => (
    <HeaderIconButton
      onPress={() => navigation.navigate('Welcome')}
      icon={({ size }) => <Ionicons name="home" size={size} color="white" />} 
    />
  ),
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  insights: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BehaviorAnalysisScreen;
