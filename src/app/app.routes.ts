import { Routes } from '@angular/router';
import { HomeMovieComponent } from './movies/home-movie/home-movie.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: HomeMovieComponent,
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];
