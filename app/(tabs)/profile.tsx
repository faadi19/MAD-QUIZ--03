import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
        style={styles.profileImage}
      />
      
      {/* Profile Info */}
      <Text style={styles.title}>Muhammad Fahad</Text>
      <Text style={styles.subtitle}>@fahad</Text>
      
      {/* Bio Section */}
      <Text style={styles.bio}>
        A passionate developer who loves coding and building amazing apps. Always learning and growing.
      </Text>

      {/* Edit Button - Wrap the Button in a View */}
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => alert('Edit Profile Pressed')} />
      </View>

      {/* Additional Info */}
      <View style={styles.additionalInfo}>
        <Text style={styles.infoText}>Email: fahad@gmail.com</Text>
        <Text style={styles.infoText}>Location: Pakistan, Karachi</Text>
        <Text style={styles.infoText}>Joined: January 2023</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 5,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginVertical: 20,
    width: '80%',
  },
  additionalInfo: {
    flexDirection: 'column', // Aligns the content vertically
    alignItems: 'center', // Centers the text horizontally
    justifyContent: 'center', // Centers the text vertically within the View
    marginTop: 20, // Space above the additional info
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5, // Adds space between each line of information
  },
});
