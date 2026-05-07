import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function BookingScreen({ route }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const service = route.params?.service || 'Taxi';

  const handleBooking = async () => {
    if (!from || !to) {
      Alert.alert('Error', 'Kalna tur ziak rawh');
      return;
    }
    try {
      await addDoc(collection(db, 'bookings'), {
        service, from, to, date, passengers, 
        status: 'pending',
        createdAt: new Date()
      });
      Alert.alert('Success', 'I booking kan lo dawng e!');
      setFrom(''); setTo(''); setDate('');
    } catch (e) {
      Alert.alert('Error', 'Booking a fail');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service} Book-na</Text>
      <TextInput style={styles.input} placeholder="Aṭanga" value={from} onChangeText={setFrom} />
      <TextInput style={styles.input} placeholder="Pan tur" value={to} onChangeText={setTo} />
      <TextInput style={styles.input} placeholder="Ni leh Hun" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Mi zat" value={passengers} onChangeText={setPassengers} keyboardType="numeric" />
      <Text style={styles.fare}>Fare Estimate: ₹300 - ₹400 vel</Text>
      <TouchableOpacity style={styles.btn} onPress={handleBooking}>
        <Text style={styles.btnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 12 },
  fare: { fontSize: 16, marginVertical: 12, color: '#C41E3A' },
  btn: { backgroundColor: '#C41E3A', padding: 16, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
