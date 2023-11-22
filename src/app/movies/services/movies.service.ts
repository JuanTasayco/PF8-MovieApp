import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {
  Actor,
  MovieDetails,
  TIME,
  TopMovieTvResponse,
  Trendings,
} from '../interfaces/movies.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_url = environment.api_url;

  trendingMoviesAndSeries(type: TIME): Observable<Trendings> {
    return this.http.get<Trendings>(
      `${this.api_url}/trending/all/${type}?language=es-PE`
    );
  }

  searchMovies(movie: string, year: string) {
    return this.http.get(
      `${this.api_url}/search/movie?query=${movie}&include_adult=false&language=es-PE&page=1&year=2005`
    );
  }

  searchCollection(collection: string) {
    return this.http.get(
      `${this.api_url}/search/collection?query=${collection}&include_adult=false&language=es-PE&page=1`
    );
  }

  searchActors(actor: string): Observable<Actor> {
    return this.http.get<Actor>(
      `${this.api_url}/search/person?query=${actor}&include_adult=false&language=es-PE&page=1`
    );
  }

  getMovieById(idMovie: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${this.api_url}/tv/${idMovie}?language=es-PE`
    );
  }

  getTopMovies(): Observable<TopMovieTvResponse> {
    return this.http.get<TopMovieTvResponse>(
      `${this.api_url}/tv/top_rated?language=es-PE&page=1`
    );
  }

  getTopTvSeries(): Observable<TopMovieTvResponse> {
    return this.http.get<TopMovieTvResponse>(
      `${this.api_url}/movie/top_rated?language=es-PE&page=1`
    );
  }

  constructor(private http: HttpClient) {}
}
