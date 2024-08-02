// screens/CartScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {/* Add cart items here */}
      <Button title="Track Order" onPress={() => navigation.navigate('Tracking')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
