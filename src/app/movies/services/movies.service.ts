import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { TIME } from '../interfaces/movies.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_url = environment.api_url;

  trendingMoviesAndSeries(type: TIME) {
    return this.http.get(`${this.api_url}/trending/all/${type}?language=es-PE`);
  }

  searchMovies(movie: string) {
    return this.http.get(
      `${this.api_url}/search/collection?query=${movie}&include_adult=false&language=es-PE&page=1`
    );
  }

  searchActors(actor: string) {
    return this.http.get(
      `${this.api_url}/search/person?query=${actor}&include_adult=false&language=es-PE&page=1`
    );
  }

  getMovieById(idMovie: string) {
    return this.http.get(`${this.api_url}/tv/${idMovie}?language=es-PE`);
  }

  getTopMovies() {
    return this.http.get(`${this.api_url}/tv/top_rated?language=es-PE&page=1`);
  }

  getTopTvSeries() {
    return this.http.get(
      `${this.api_url}/movie/top_rated?language=es-PE&page=1`
    );
  }

  constructor(private http: HttpClient) {}
}
