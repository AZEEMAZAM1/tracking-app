// screens/SignInScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
