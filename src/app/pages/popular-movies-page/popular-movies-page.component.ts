import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
    selector: 'app-popular-movies-page',
    standalone: true,
    templateUrl: './popular-movies-page.component.html',
    providers: [MovieService],
    styleUrl: './popular-movies-page.component.scss',
    imports: [HeaderComponent, MovieCardComponent, RouterLink, RouterModule, MovieListComponent]
})
export class PopularMoviesPageComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  // favoriteMovieListIds: string[] = [];
  // watchLaterMovieListIds: string[] = [];
  popularMovies: Movie[] = [];
  counter: number = 0;
  
  ngOnInit() {
    this.movieService.getPopularMovieList().subscribe((data) => {
      this.popularMovies = data.results;
      console.log(this.popularMovies);
    });
  }
}
