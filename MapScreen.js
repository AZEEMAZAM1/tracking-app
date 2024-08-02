// components/MapScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Update with your server's URL if necessary

const MapScreen = () => {
  const [location, setLocation] = useState({ latitude: 37.78825, longitude: -122.4324 });

  useEffect(() => {
    socket.on('locationUpdate', (newLocation) => {
      setLocation(newLocation);
    });

    // Simulate sending location updates from the client
    const interval = setInterval(() => {
      const mockLocation = {
        latitude: 37.78825 + Math.random() * 0.01,
        longitude: -122.4324 + Math.random() * 0.01,
      };
      socket.emit('locationUpdate', mockLocation);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={location} />
      </MapView>
      <View style={styles.infoContainer}>
        <Text>Latitude: {location.latitude}</Text>
        <Text>Longitude: {location.longitude}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default MapScreen;
