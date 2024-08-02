// screens/TrackingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import io from 'socket.io-client';

const socket = io('http://YOUR_SERVER_IP:3000');

export default function TrackingScreen() {
  const [location, setLocation] = useState({ latitude: 37.78825, longitude: -122.4324 });

  useEffect(() => {
    socket.on('locationUpdate', (newLocation) => {
      setLocation(newLocation);
    });

    return () => {
      socket.off('locationUpdate');
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
