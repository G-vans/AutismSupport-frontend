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
// import SignUpForm from '../screens/SignUpForm';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="EmotionTaggingScreen" component={EmotionTaggingScreen} />
        <Stack.Screen name="UploadPhotoScreen" component={UploadPhotoScreen} />
        <Stack.Screen name="DescribeEmotions" component={DescribeEmotionsScreen} />
        {/* <Stack.Screen name="SignUpForm" component={SignUpForm} /> */}

      </Stack.Navigator>
  );
};

export default AppNavigator;