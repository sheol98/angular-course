import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { TopRatePageComponent } from './pages/top-rate-page/top-rate-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { PopularMoviesPageComponent } from './pages/popular-movies-page/popular-movies-page.component';
import { FavoriteMoviesPageComponent } from './pages/favorite-movies-page/favorite-movies-page.component';
import { WatchLaterPageComponent } from './pages/watch-later-page/watch-later-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'movie/:id', component: MovieDetailsPageComponent },
  { path: 'now-playing', component: NowPlayingPageComponent },
  { path: 'top-rate', component: TopRatePageComponent },
  { path: 'upcoming', component: UpcomingPageComponent },
  { path: 'popular', component: PopularMoviesPageComponent },

  { path: 'favorite', component: FavoriteMoviesPageComponent },
  { path: 'watch-list', component: WatchLaterPageComponent },
];
