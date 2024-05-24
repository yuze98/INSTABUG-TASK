import fetchMock from 'fetch-mock';
import MovieService from '../src/services/MovieService';
import {NativeModules} from 'react-native';

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

describe('MoviesApi', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const movieMock = {
    page: 1,
    results: [
      {
        id: 1,
        original_language: 'en',
        description: 'A mock movie description',
        popularity: 100,
        imageUri: 'http://example.com/image.jpg',
        release_date: '2024-01-01',
        title: 'Mock Movie Title',
        vote_average: 8.5,
        vote_count: 1000,
        backdrop_path: '/path/to/backdrop.jpg',
      },
    ],
    total_pages: 3000,
    total_results: 1200,
  };
  it('should resolve with response data when request is successful', async () => {
    // Mock the native module method to return a resolved promise with the mocked response data
    NativeModules.MoviesApi.getMoviesListNative.mockResolvedValue(movieMock);

    const result = await MovieService.getMovieListNative();

    expect(result).toBe(movieMock);
  });

  it('should reject with error when request fails', async () => {
    const error = new Error('Failed to fetch');
    // Mock the native module method to return a rejected promise with the mocked error
    NativeModules.MoviesApi.getMoviesListNative.mockRejectedValue(error);

    await expect(MovieService.getMovieListNative()).rejects.toThrowError(error);
  });
});
