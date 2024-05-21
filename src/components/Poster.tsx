import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../utils/types';
import React from 'react';

const Poster = (item: Movie, navigation: any) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MovieDetails', {
            item: item,
          })
        }>
        <Image source={{uri: item.imageUri}} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 175,
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#cccccc',
  },
});
export default Poster;
