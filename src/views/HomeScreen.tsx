import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import MovieService from '../services/MovieService';
import {Movie} from '../utils/types';

const STORAGE_KEY = 'MOVIE_LIST';

const renderItem = (item: Movie, navigation: any) => {
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
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieList = async () => {
      const state = await NetInfo.fetch();

      if (state.isConnected) {
        try {
          const response = await MovieService.getMovieListAxios();
          setMovies(response.movies);
          await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(response.movies),
          );
        } catch (err) {
          setError('An error occurred during fetching movie list');
          console.error('An error occurred during fetching movie list', err);
        }
      } else {
        Alert.alert('No Internet Connection', 'Displaying stored movies');
        const storedMovies = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedMovies) {
          setMovies(JSON.parse(storedMovies));
        } else {
          setError('No movies stored');
        }
      }
    };
    fetchMovieList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.header]}>Your Movie List</Text>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => renderItem(item, navigation)}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      )}
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
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
