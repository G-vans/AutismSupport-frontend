import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen.js';
import WalkthroughScreen from '../screens/WalkThrough/WalkthroughScreen.js'
import WelcomeScreen from '../screens/WelcomeScreen.js'
import EmotionTaggingScreen from '../screens/EmotionTaggingScreen.js'
import UploadPhotoScreen from '../screens/UploadPhotoScreen.js'
import DescribeEmotionsScreen from '../screens/DescribeEmotionsScreen';
import SignUpForm from '../screens/SignUpForm';
import LogBehaviorsScreen from '../screens/LogBehaviorsScreen';
import BehaviorAnalysisScreen from '../screens/BehaviorAnalysisScreen';
import InsightsScreen from '../screens/InsightsScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Autism Support' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Emotion Tagging" component={EmotionTaggingScreen} />
        <Stack.Screen name="Upload Photo" component={UploadPhotoScreen} />
        <Stack.Screen name="Describe Emotions" component={DescribeEmotionsScreen} />
        <Stack.Screen name="Sign Up" component={SignUpForm} />
        <Stack.Screen name="Log Behaviors" component={LogBehaviorsScreen} options={{ title: 'Log Behaviors Form' }} />
        <Stack.Screen name="BehaviorAnalysis" component={BehaviorAnalysisScreen} options={{ title: 'Behavior Analysis', headerStyle: {
            backgroundColor: '#6666ff',
          }, }} />
        <Stack.Screen name="Insights" component={InsightsScreen} options={{ title: 'Insights and Recommendations' }} />

      </Stack.Navigator>
  );
};

export default AppNavigator;