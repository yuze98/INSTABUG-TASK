import fetchMock from 'fetch-mock';
import MovieService from '../src/services/MovieService';
import {NativeModules} from 'react-native';
import transformMovieList from '../src/utils/MoviesUtils';

// Mock the API_URL and API_KEY from Config
jest.mock('react-native-config', () => ({
  API_URL: 'https://api.themoviedb.org/3/discover/movie',
  API_KEY: 'acea91d2bff1c53e6604e4985b6989e2',
}));

// Mock NativeModules
jest.mock('react-native', () => ({
  NativeModules: {
    MoviesApi: {
      getMoviesListNative: jest.fn(),
    },
  },
}));

// Mocking MovieService native bridging function
describe('MoviesApi', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const movieMock = [
    {
      adult: false,
      backdrop_path: '/path/to/backdrop.jpg',
      genre_ids: [28, 12, 16],
      id: 1,
      original_language: 'en',
      original_title: 'Mock Original Title',
      overview: 'A mock movie description',
      popularity: 100,
      poster_path: '/path/to/poster.jpg',
      release_date: '2024-01-01',
      title: 'Mock Movie Title',
      video: false,
      vote_average: 8.5,
      vote_count: 1000,
    },
  ];

  const movieMockResponse = {
    page: 1,
    results: movieMock,
    total_pages: 3000,
    total_results: 1200,
  };

  const movieMockConverted = {
    movies: transformMovieList(movieMock),
    currentPage: movieMockResponse.page,
    totalPages: movieMockResponse.total_pages,
  };

  it('should resolve with response data when request is successful', async () => {
    // Mock the native module method to return a resolved promise with the mocked response data
    NativeModules.MoviesApi.getMoviesListNative.mockResolvedValue(
      JSON.stringify(movieMockResponse),
    );

    // Test the function for the mocked converted result and the main response
    const result = await MovieService.getMovieListNative();
    expect(result).toEqual(movieMockConverted);
  });

  it('should reject with error when request fails', async () => {
    const error = new Error('Failed to fetch');
    // Mock the native module method to return a rejected promise with the mocked error
    NativeModules.MoviesApi.getMoviesListNative.mockRejectedValue(error);
    // Checking for the errors for a rejected request
    await expect(MovieService.getMovieListNative()).rejects.toThrowError(error);
  });
});
