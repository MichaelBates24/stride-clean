import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { signupStyles } from '../styles/styles';


function HomeScreen({ navigation }) {
  return (
    <View style={signupStyles.container}>
      <Image
        source={require('../assets/Stridelogo.png')}
        style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 32 }}
      />
      <Text style={signupStyles.logo}>Stride.</Text>
      <Text style={signupStyles.tagline}>Moving Physical Therapy...Forward</Text>

      <Text style={signupStyles.header}>Welcome</Text>
      <Text style={signupStyles.subheader}>Let’s get you moving.</Text>

      <TouchableOpacity style={signupStyles.continueButton} onPress={() => navigation.navigate('Login')}>
        <Text style={signupStyles.continueText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
