export type TIME = 'day' | 'week';

/*TOP movies and TV response */
export interface TopMovieTvResponse {
  page: number;
  results: TopResultMovieTv[];
  total_pages: number;
  total_results: number;
}

export interface TopResultMovieTv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: TopOriginalLanguage | string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
}

export enum TopOriginalLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
  Ko = 'ko',
}

/* trendings */

export interface Trendings {
  page: number;
  results: ResultTrend[];
  total_pages: number;
  total_results: number;
}

export interface ResultTrend {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: TopOriginalLanguage;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

/* actor */

export interface Actor {
  page: number;
  results: ResultActor[];
  total_pages: number;
  total_results: number;
}

export interface ResultActor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownFor[];
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name?: string;
  original_language: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: Date;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: Date;
  video?: boolean;
}

/*  movie Details */

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedByDetail[];
  episode_run_time: number[];
  first_air_date: Date;
  genres: GenreDetail[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: Date;
  last_episode_to_air: LastEpisodeToAirDetail;
  name: string;
  next_episode_to_air: null;
  networks: NetworkDetail[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: NetworkDetail[];
  production_countries: ProductionCountryDetail[];
  seasons: SeasonDetail[];
  spoken_languages: SpokenLanguageDetail[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface CreatedByDetail {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface GenreDetail {
  id: number;
  name: string;
}

export interface LastEpisodeToAirDetail {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: Date;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface NetworkDetail {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountryDetail {
  iso_3166_1: string;
  name: string;
}

export interface SeasonDetail {
  air_date: Date;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface SpokenLanguageDetail {
  english_name: string;
  iso_639_1: string;
  name: string;
}
