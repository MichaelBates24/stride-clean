import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { signupStyles } from '../styles/styles';


function LoginScreen({ navigation }) {
  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.logo}>Stride.</Text>
      <Text style={signupStyles.tagline}>Moving Physical Therapy...Forward</Text>

      <Text style={signupStyles.header}>Welcome back</Text>
      <Text style={signupStyles.subheader}>Sign in to continue</Text>

      <TextInput
        style={signupStyles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={signupStyles.continueButton}>
        <Text style={signupStyles.continueText}>Login</Text>
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
        Don't have an account?{' '}
        <Text style={signupStyles.link} onPress={() => navigation.navigate('Signup')}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}

export default LoginScreen;
