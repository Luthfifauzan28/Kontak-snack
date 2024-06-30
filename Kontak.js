import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const classmates = [
  { id: '1', name: 'Luthfi', phone: '083-456-7890', details: 'Teman Masa kecil.', address: 'Jl. Kenangan No. 2', image: require('../assets/Luthfi.png') },
  { id: '2', name: 'Ages', phone: '087-666-3214', details: 'Teman Kuliah.', address: 'Jampang Tengah', image: require('../assets/Ages.png') },
  { id: '3', name: 'Raka', phone: '088-694-3713', details: 'Teman SD.', address: 'Perumahan Binjai', image: require('../assets/raka.png') },
  { id: '4', name: 'Rizky', phone: '089-674-3812', details: 'Teman Kuliah.', address: 'Cibadak', image: require('../assets/kyy.jpg') },
  { id: '5', name: 'Carol', phone: '085-64-3911', details: 'Teman Kuliah.', address: 'Pelabuan Ratu', image: require('../assets/carol.png') },
];

const Kontak = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={classmates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.address}</Text>
              <Button
                title="View Details"
                onPress={() => navigation.navigate('Detailkontak', { contact: item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
  },
});

export default Kontak;
