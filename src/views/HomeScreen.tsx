// HomeScreen.js
import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type item = {
  id: number;
  title: string;
  description: string;
  imageUri: string;
};
const DATA = [
  {
    id: 1,
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology.',
    imageUri:
      'https://m.media-amazon.com/images/M/MV5BMTkxNWJkZjItZjk3My00NTQ2LWJmYjItN2Y0MDQ2YjYzYzFhXkEyXkFqcGdeQXVyMjMxOTA1NjA@._V1_.jpg',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description:
      'When the menace known as The Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    imageUri:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDQ4YjQtZTM3OS00ZDBiLWJiNzItMTk5NzliYjA5ZGM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUri:
      'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNzM5M15BMl5BanBnXkFtZTgwNjUxNzE3MTE@._V1_.jpg',
  },
  {
    id: 4,
    title: 'The Matrix',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    imageUri:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3MTEtNmRjMy00ZjNhLTg5ZGMtYjA3ZTVlNTlhNzE4XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
  },
  {
    id: 5,
    title: 'Avatar',
    description:
      'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    imageUri:
      'https://m.media-amazon.com/images/M/MV5BMTYwMzAwNDQxN15BMl5BanBnXkFtZTcwNTI5OTY0Mg@@._V1_.jpg',
  },
];

const renderItem = (item: item, navigation: any) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MovieDetails', {
            title: item.title,
            description: item.description,
            imageUri: item.imageUri,
          })
        }>
        <Image source={{uri: item.imageUri}} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.header]}>Your Movie List</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => renderItem(item, navigation)}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  header: {
    fontSize: 24,
    color: '#bbbbbb',
  },
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

export default HomeScreen;
