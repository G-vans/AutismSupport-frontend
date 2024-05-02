import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input, CheckBox } from 'react-native-elements';
import axios from 'axios';
// import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';


const SignUpForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [childName, setChildName] = useState('');
  const [diagnosedWithASD, setDiagnosedWithASD] = useState(false);
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const [fontsLoaded] = useFonts({
  //   Montserrat: require('../fonts/MontserratFont.ttf'), // Replace with your font path
  //   // Add other fonts and their paths here
  // });


  const handleSignup = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://192.168.100.16:3000/register', {
        email,
        password,
        childName,
        diagnosedWithASD,
        dob
      });

      setLoading(false);
      console.log('User created successfully');
      navigation.navigate('Welcome');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.error || 'Failed to create user');
      } else {
        setError('Network error. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Input
        label="Child's Name"
        placeholder="Enter your child's name"
        value={childName}
        onChangeText={setChildName}
      />
      <Input
        label="Child's Age"
        placeholder="Enter your child's age"
        value={dob}
        onChangeText={setDob}
      />
      <CheckBox
        title="Diagnosed with ASD?"
        checked={diagnosedWithASD}
        onPress={() => setDiagnosedWithASD(!diagnosedWithASD)}
      />
      <Button
        title="Signup"
        onPress={handleSignup}
        loading={loading}
        disabled={loading}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007BFF',
  },
  input: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
  },
  button: {
    width: '80%',
    marginTop: 20,
    backgroundColor: '#007BFF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});

export default SignUpForm;
