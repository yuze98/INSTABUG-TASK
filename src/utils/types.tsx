export type Movie = {
  id: number;
  original_language: string;
  description: string;
  popularity: number;
  imageUri: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};
export type MovieApi = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type MovieResponse = {
  page: number;
  results: MovieApi[];
  total_pages: number;
  total_results: number;
};
