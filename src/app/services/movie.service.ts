import { Injectable } from '@angular/core';
import { nowPlayingMovies, popularMovies, topRatedMovies } from '../mock-data';
import { Movie, MovieApiModel } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {
  apiKey = '?api_key=02ff1c132cd041bf6607d208d1faefcc';
  apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmZmMWMxMzJjZDA0MWJmNjYwN2QyMDhkMWZhZWZjYyIsIm5iZiI6MTcyMTMzMjY3OS4xODY2NjksInN1YiI6IjY2OTk3MjkxYjI5OGUzZDBlYjZmMjcyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.joyjmFh4o9acLL0ZtBdXqiB6Z4X0F12jEEu0Auln1N0';
  baseApiUrl = 'https://api.themoviedb.org/3/movie/';
  favMovies: Movie[] = [];
  watchLater: Movie[] = [];

  constructor(private httpClient: HttpClient) {}
  getPopularMovieList(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}popular${this.apiKey}`)
  }
  getNowPlayingMovies():Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}now_playing${this.apiKey}`)
  }
  
  getTopRate():Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}top_rated${this.apiKey}`)
  }

  getUpComing():Observable<MovieApiModel>{
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}upcoming${this.apiKey}`)
  }

  getFavoriteMovie() {
    return this.favMovies;
  }
  setToFavorites(movie: any) {
    if (!this.favMovies.includes(movie)) this.favMovies.push(movie);
    console.log(this.favMovies);
    
  }

  getToWatchLater() {
    return this.watchLater;
  }
  setToWatchLater(movie: any) {
    if (!this.watchLater.includes(movie)) this.watchLater.push(movie);
    console.log(this.watchLater);
  }
}
