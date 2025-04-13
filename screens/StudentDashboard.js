import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function StudentDashboard({ navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { _id: '1', title: 'Essay on AI', subject: 'CS', wordCount: 1500, status: 'pending' },
      { _id: '2', title: 'Marketing Report', subject: 'Business', wordCount: 2000, status: 'completed' }
    ]);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Subject: {item.subject}</Text>
      <Text>Word Count: {item.wordCount}</Text>
      <Text>Status: {item.status}</Text>
      <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <FlatList data={orders} keyExtractor={(item) => item._id} renderItem={renderItem} />
      <Button title="Place New Order" onPress={() => navigation.navigate('PlaceOrder')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#f0f0f0', marginBottom: 10, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' }
});
