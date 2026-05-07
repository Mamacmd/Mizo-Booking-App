import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const services = [
    { name: 'Taxi', icon: '🚕' },
    { name: 'Sumo', icon: '🚐' },
    { name: 'Delivery', icon: '📦' },
    { name: 'Hotel', icon: '🏨' },
    { name: 'Bike', icon: '🏍️' },
    { name: 'Hall', icon: '🏛️' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>I kalna tur thlang rawh</Text>
      <View style={styles.grid}>
        {services.map((service, idx) => (
          <TouchableOpacity 
            key={idx} 
            style={styles.card}
            onPress={() => navigation.navigate('Booking', { service: service.name })}
          >
            <Text style={styles.icon}>{service.icon}</Text>
            <Text style={styles.cardText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#000' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { 
    width: '48%', 
    backgroundColor: '#C41E3A', 
    padding: 24, 
    borderRadius: 12, 
    marginBottom: 16,
    alignItems: 'center'
  },
  icon: { fontSize: 40, marginBottom: 8 },
  cardText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
