import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Detailkontak = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.image} style={styles.image} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>Phone: {contact.phone}</Text>
      <Text style={styles.details}>{contact.details}</Text>
      <Text style={styles.address}>Address: {contact.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 18,
    marginTop: 10,
  },
  details: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  address: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#888',
  },
});

export default Detailkontak;
