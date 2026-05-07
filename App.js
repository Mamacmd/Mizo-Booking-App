import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import DriverScreen from './screens/DriverScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#C41E3A',
          tabBarStyle: { backgroundColor: '#000' },
          headerStyle: { backgroundColor: '#C41E3A' },
          headerTintColor: '#fff',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Mizo Booking' }} />
        <Tab.Screen name="Booking" component={BookingScreen} options={{ title: 'Book-na' }} />
        <Tab.Screen name="Driver" component={DriverScreen} options={{ title: 'Driver' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}