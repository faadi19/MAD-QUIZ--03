import React from 'react';
import { StyleSheet, Image, View, useColorScheme } from 'react-native';
import { Text } from '@/components/Themed'; // Assuming these are your custom components
import { Link } from 'expo-router'; // Link to navigate between screens

export default function TabTwoScreen() {
  const colorScheme = useColorScheme(); // Get the current color scheme (light/dark)

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Welcome to Tab Two!</Text>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
        style={styles.image}
      />

      {/* Description Text */}
      <Text style={styles.subtitle}>This is your homepage where you can navigate to different sections of the app.</Text>

      {/* Separator */}
      <View
        style={[
          styles.separator,
          { backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#eee' }, // Adjust separator color based on theme
        ]}
      />

      {/* Navigation Link to Login */}
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go to Profile Screen</Text>
      </Link>
      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Enjoy exploring the app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#2e78b7',
  },
  footer: {
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#888',
  },
});
