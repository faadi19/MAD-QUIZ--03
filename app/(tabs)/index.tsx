import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router'; // Use router from expo-router

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // For loading state
  const router = useRouter(); // For navigation after login

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Input Error', 'Please fill in both username and password.');
      return;
    }

    // Show loading indicator
    setLoading(true);

    // Simulate login logic (replace with real authentication logic)
    const validUsername = 'testuser';
    const validPassword = 'password123';

    setTimeout(() => {
      setLoading(false); // Hide loading indicator after the simulated delay

      if (username === validUsername && password === validPassword) {
        Alert.alert('Login Successful', 'Welcome to the app!');
        router.replace('/profile'); // Navigate to the Profile page after successful login
      } else {
        Alert.alert('Login Failed', 'Invalid username or password.');
      }
    }, 1500); // Simulate network request delay
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Show loading spinner when login is in progress */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  loading: {
    marginVertical: 20,
  },
});
