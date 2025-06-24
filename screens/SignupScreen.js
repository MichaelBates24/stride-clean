import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { signupStyles } from '../styles/styles';


function SignupScreen({ navigation }) {
  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.logo}>Stride.</Text>
      <Text style={signupStyles.tagline}>Jay has a huge head</Text>

      <Text style={signupStyles.header}>Create An Account</Text>
      <Text style={signupStyles.subheader}>Enter your email to sign up for this app</Text>

      <TextInput
        style={signupStyles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={signupStyles.continueButton} onPress={() => navigation.navigate('UserProfile')}>
  <Text style={signupStyles.continueText}>Continue</Text>
</TouchableOpacity>


      <View style={signupStyles.divider}>
        <View style={signupStyles.line} />
        <Text style={signupStyles.or}>or</Text>
        <View style={signupStyles.line} />
      </View>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={signupStyles.socialButton}>
        <Text style={signupStyles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={signupStyles.disclaimer}>
        By clicking continue, you agree to our{' '}
        <Text style={signupStyles.link}>Terms of Service</Text> and{' '}
        <Text style={signupStyles.link}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

export default SignupScreen;
