import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { signupStyles } from '../styles/styles';


function UserProfileScreen({ navigation }) {
  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.logo}>Stride.</Text>
      <Text style={signupStyles.tagline}>Let’s get to know you</Text>

      <Text style={signupStyles.header}>First Name</Text>
      <TextInput style={signupStyles.input} placeholder="John" placeholderTextColor="#aaa" />

      <Text style={signupStyles.header}>Last Name</Text>
      <TextInput style={signupStyles.input} placeholder="Doe" placeholderTextColor="#aaa" />

      <Text style={signupStyles.header}>Select your role</Text>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>Pre-PT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>PT Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>DPT / Licensed PT</Text>
      </TouchableOpacity>

      <Text style={signupStyles.header}>Credentials</Text>
      <TextInput style={signupStyles.input} placeholder="e.g. CSCS, OCS" placeholderTextColor="#aaa" />

      <TouchableOpacity
  style={signupStyles.continueButton}
  onPress={() => navigation.navigate('Dashboard')}
>
  <Text style={signupStyles.continueText}>Continue</Text>
</TouchableOpacity>

    </View>
  );
}

export default UserProfileScreen;
