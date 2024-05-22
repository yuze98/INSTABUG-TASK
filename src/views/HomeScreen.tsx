import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import MovieService from '../services/MovieService';
import {Movie} from '../utils/types';
import Poster from '../components/Poster';
import {HomeScreenStyles} from '../styles/HomeScreenStyles';

const STORAGE_KEY = 'MOVIE_LIST';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieList = async () => {
      const state = await NetInfo.fetch();

      if (state.isConnected) {
        try {
          const response = await MovieService.getMovieListNative();
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
    <View style={HomeScreenStyles.container}>
      <Text style={[HomeScreenStyles.title, HomeScreenStyles.header]}>
        Your Movie List
      </Text>
      {error ? (
        <Text style={HomeScreenStyles.error}>{error}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => Poster(item, navigation)}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default HomeScreen;
