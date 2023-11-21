import { Routes } from '@angular/router';
import { HomeMovieComponent } from './movies/pages/home/home-movie.component';

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
