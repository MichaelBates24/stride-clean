import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8f9fa', // light gray background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1e1e1e',
  },
  button: {
    marginTop: 4,
  },
};

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tagline: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#555',
    alignSelf: 'center',
    marginBottom: 32,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  subheader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  or: {
    marginHorizontal: 8,
    color: '#888',
  },
  socialButton: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  socialText: {
    color: '#333',
    fontWeight: '500',
  },
  disclaimer: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 24,
  },
  link: {
    color: '#000',
    fontWeight: '500',
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={signupStyles.container}>
      <Image
        source={require('./assets/Stridelogo.png')}
        style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 32 }}
      />
      <Text style={signupStyles.logo}>Stride.</Text>
      <Text style={signupStyles.tagline}>Moving Physical Therapy...To the Moon</Text>

      <Text style={signupStyles.header}>Welcome</Text>
      <Text style={signupStyles.subheader}>Let’s get you moving.</Text>

      <TouchableOpacity style={signupStyles.continueButton} onPress={() => navigation.navigate('Login')}>
        <Text style={signupStyles.continueText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}



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





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
