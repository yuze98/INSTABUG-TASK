import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import MovieService from '../services/MovieService';
import {Movie} from '../utils/types';
import Poster from '../components/Poster';
import {HomeScreenStyles} from '../styles/HomeScreenStyles';

/**
 * Description:
 * HomeScreen component represents the main screen of the Movie app, displaying a list of movies.
 * It fetches the movie list from the server Natively using Kotlin and Swift for
 * both IOS and Android and stores it locally for offline use.
 *
 * Screen:
 * @returns {JSX.Element} HomeScreen component.
 */
const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Calling the fetching module and sets its state
    const fetchMovieList = async () => {
      const state = await NetInfo.fetch();
      // check if the there is an internet connection
      if (state.isConnected) {
        try {
          const response = await MovieService.getMovieListNative();
          // sets the response data in both the state and the async storage for future offline use
          setMovies(response.movies);
          await AsyncStorage.setItem(
            'MOVIE_LIST',
            JSON.stringify(response.movies),
          );
        } catch (err) {
          setError('An error occurred during fetching movie list');
          console.error('An error occurred during fetching movie list', err);
        }
      } else {
        Alert.alert('No Internet Connection', 'Displaying stored movies');
        // if there were no internet connection then it just retrieves the data from
        // the async storage and adds it to the state if the data exists
        const storedMovies = await AsyncStorage.getItem('MOVIE_LIST');
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
