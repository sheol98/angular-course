import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-favorite-movies-page',
  standalone: true,
  providers: [MovieService],
  templateUrl: './favorite-movies-page.component.html',
  styleUrl: './favorite-movies-page.component.scss',
  imports: [MovieCardComponent],
})
export class FavoriteMoviesPageComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  favorites: Movie[] = [];
  ngOnInit() {
    this.favorites = this.movieService.getFavoriteMovie();
    console.log(this.favorites);
  }
}
