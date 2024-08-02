// screens/ProductsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      {/* Add products here */}
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
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
