import axios from 'axios';
import Config from 'react-native-config';
import {MovieResponse} from '../utils/types';
import transformMovieList from '../utils/MoviesUtils';

const API_URL = Config.API_URL;
const API_KEY = Config.API_KEY;
// Define the MovieService object
const MovieService = {
  getMovieListAxios: async (): Promise<any> => {
    console.log(`${API_URL}?apikey=${API_KEY}`);
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
