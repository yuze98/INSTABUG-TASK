import Config from 'react-native-config';
import {Movie, MovieApi} from './types';
/**
 * Description:
 * transformMovieList function transforms an array of movie objects fetched from the API
 * into an array of standardized Movie objects.
 * It maps each API movie object to a Movie object.
 * Converts Image path into a unified URI to be used.
 *
 * Function:
 * @param {MovieApi[]} apiMovieList - Array of movie objects fetched from the API.
 * @returns {Movie[]} Array of standardized Movie objects.
 */
const transformMovieList = (apiMovieList: MovieApi[]): Movie[] => {
  const IMG_API_URL = Config.IMG_API_URL;
  return apiMovieList.map(apiMovie => ({
    id: apiMovie.id,
    original_language: apiMovie.original_language,
    description: apiMovie.overview,
    popularity: apiMovie.popularity,
    imageUri: IMG_API_URL + apiMovie.poster_path,
    release_date: apiMovie.release_date,
    title: apiMovie.title,
    vote_average: apiMovie.vote_average,
    vote_count: apiMovie.vote_count,
    backdrop_path: IMG_API_URL + apiMovie.backdrop_path,
  }));
};

export default transformMovieList;
