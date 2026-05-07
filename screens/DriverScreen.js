import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DriverScreen() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.toggle, { backgroundColor: isOnline ? '#0F0' : '#999' }]} 
        onPress={() => setIsOnline(!isOnline)}
      >
        <Text style={styles.toggleText}>{isOnline ? 'ONLINE' : 'OFFLINE'}</Text>
      </TouchableOpacity>
      
      <Text style={styles.header}>Booking Thar</Text>
      <View style={styles.bookingCard}>
        <Text style={styles.route}>Aizawl → Champhai</Text>
        <Text>3 pax, 2:30 PM</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.btn, styles.accept]}>
            <Text style={styles.btnText}>Pawm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.reject]}>
            <Text style={styles.btnText}>Hnawl</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.earnings}>Vawiin hlawh: ₹1,850</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  toggle: { padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  toggleText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  bookingCard: { borderWidth: 1, borderColor: '#ddd', padding: 16, borderRadius: 8, marginBottom: 16 },
  route: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  actions: { flexDirection: 'row', marginTop: 12, gap: 12 },
  btn: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center' },
  accept: { backgroundColor: '#0A0' },
  reject: { backgroundColor: '#C41E3A' },
  btnText: { color: '#fff', fontWeight: 'bold' },
  earnings: { fontSize: 18, marginTop: 20, color: '#C41E3A' },
});
