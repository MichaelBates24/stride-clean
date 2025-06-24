import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signupStyles } from '../styles/styles';


function DashboardScreen({ navigation }) {
  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.logo}>Welcome Back</Text>
      <Text style={signupStyles.tagline}>You're signed in as a future PT 🚀</Text>

      <Text style={signupStyles.header}>Dashboard</Text>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>📚 Browse Content</Text>
      </TouchableOpacity>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>💪 Log Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>📅 Upcoming Events</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[signupStyles.continueButton, { marginTop: 32 }]}>
        <Text style={signupStyles.continueText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DashboardScreen;
