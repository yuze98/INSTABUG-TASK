import axios from 'axios';
import Config from 'react-native-config';
import {MovieResponse} from '../utils/types';
import transformMovieList from '../utils/MoviesUtils';
import {NativeModules} from 'react-native';

const API_URL = Config.API_URL;
const API_KEY = Config.API_KEY;
const {MoviesApi} = NativeModules;

// Define the MovieService object
const MovieService = {
  // Natively fetching Movie API through Android and IOS using KOTLIN and SWIFT base code
  getMovieListNative: async (): Promise<any> => {
    console.log(`${API_URL}?api_key=${API_KEY}`);
    try {
      // Call the native module method to fetch movie list
      const response = await MoviesApi.getMoviesListNative(
        `${API_URL}?api_key=${API_KEY}`,
      );
      const responseData = JSON.parse(response);
      console.log('fetched successfully from native function with');
      return {
        movies: transformMovieList(responseData.results),
        currentPage: responseData.page,
        totalPages: responseData.total_pages,
      };
    } catch (error) {
      console.error('Error fetching movie list:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  },
  // React Native API fetching function for testing purposes
  getMovieListAxios: async (): Promise<any> => {
    console.log(`${API_URL}?api_key=${API_KEY}`);
    try {
      if (!API_URL) {
        throw new Error('API_URL is not defined');
      }
      // Fetch data from the API
      const response = await axios.get<MovieResponse>(
        `${API_URL}?api_key=${API_KEY}`,
      );
      return {
        movies: transformMovieList(response.data.results),
        currentPage: response.data.page,
        totalPages: response.data.total_pages,
      };
    } catch (error) {
      console.error('Error fetching movie list:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  },
};

export default MovieService;
