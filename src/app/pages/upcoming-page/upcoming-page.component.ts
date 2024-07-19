import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
    selector: 'app-upcoming-page',
    standalone: true,
    templateUrl: './upcoming-page.component.html',
    styleUrl: './upcoming-page.component.scss',
    imports: [MovieCardComponent, HeaderComponent, MovieListComponent]
})
export class UpcomingPageComponent implements OnInit {
  upcomingMovies: Movie[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getUpComing().subscribe((data) => {
      this.upcomingMovies = data.results;
    });
  }
}
