import Config from 'react-native-config';
import {Movie, MovieApi} from './types';

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
  }));
};

export default transformMovieList;
