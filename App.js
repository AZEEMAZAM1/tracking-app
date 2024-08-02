// // // // import { StatusBar } from 'expo-status-bar';
// // // // import { StyleSheet, Text, View } from 'react-native';

// // // // export default function App() {
// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text>Open up App.js to start working on your app!</Text>
// // // //       <StatusBar style="auto" />
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // // });
// // // // TrackerApp/App.js

// // // import React, { useEffect, useState } from 'react';
// // // import { View, Button, StyleSheet, Dimensions } from 'react-native';
// // // import MapView, { Marker } from 'react-native-maps';
// // // import io from 'socket.io-client';

// // // const socket = io('http://localhost:3000'); // Replace with your server URL

// // // export default function App() {
// // //   const [friendLocation, setFriendLocation] = useState(null);

// // //   useEffect(() => {
// // //     socket.on('locationUpdate', (location) => {
// // //       setFriendLocation(location);
// // //     });

// // //     return () => socket.off('locationUpdate');
// // //   }, []);

// // //   return (
// // //     <View style={styles.container}>
// // //       <MapView
// // //         style={styles.map}
// // //         initialRegion={{
// // //           latitude: 37.78825,
// // //           longitude: -122.4324,
// // //           latitudeDelta: 0.0922,
// // //           longitudeDelta: 0.0421,
// // //         }}
// // //       >
// // //         {friendLocation && (
// // //           <Marker
// // //             coordinate={friendLocation}
// // //             pinColor="blue"
// // //             title="Friend's Location"
// // //           />
// // //         )}
// // //       </MapView>
// // //       <Button title="Refresh Location" onPress={() => socket.emit('requestLocation')} />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   map: {
// // //     width: Dimensions.get('window').width,
// // //     height: Dimensions.get('window').height,
// // //   },
// // // });



// // import React, { useEffect, useState } from 'react';
// // import { View, Button, StyleSheet, Dimensions } from 'react-native';
// // import MapView, { Marker } from 'react-native-maps';
// // import io from 'socket.io-client';

// // const socket = io('http://YOUR_SERVER_IP:3000'); // Replace with your server IP

// // export default function App() {
// //   const [friendLocation, setFriendLocation] = useState(null);

// //   useEffect(() => {
// //     socket.on('locationUpdate', (location) => {
// //       setFriendLocation(location);
// //     });

// //     return () => socket.off('locationUpdate');
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         style={styles.map}
// //         initialRegion={{
// //           latitude: 37.78825,
// //           longitude: -122.4324,
// //           latitudeDelta: 0.0922,
// //           longitudeDelta: 0.0421,
// //         }}
// //       >
// //         {friendLocation && (
// //           <Marker
// //             coordinate={friendLocation}
// //             pinColor="blue"
// //             title="Friend's Location"
// //           />
// //         )}
// //       </MapView>
// //       <Button title="Refresh Location" onPress={() => socket.emit('requestLocation')} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   map: {
// //     width: Dimensions.get('window').width,
// //     height: Dimensions.get('window').height,
// //   },
// // });
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import io from 'socket.io-client';

// // Replace with your server IP address
// const socket = io('http://YOUR_SERVER_IP:3000');

// export default function App() {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     socket.on('locationUpdate', (location) => {
//       setLocation(location); // Receive and update location
//     });

//     return () => {
//       socket.off('locationUpdate');
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Receiving location updates...</Text>
//       {location && (
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker coordinate={location} />
//         </MapView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import RegisterScreen from './RegisterScreen';
import ProductsScreen from './ProductsScreen';
import CartScreen from './CartScreen';
import TrackingScreen from './TrackingScreen';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
