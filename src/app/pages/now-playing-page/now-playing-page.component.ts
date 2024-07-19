import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { Movie } from '../../models/movie.model';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
    selector: 'app-now-playing-page',
    standalone: true,
    templateUrl: './now-playing-page.component.html',
    styleUrl: './now-playing-page.component.scss',
    imports: [MovieCardComponent, MovieListComponent]
})
export class NowPlayingPageComponent implements OnInit {
  nowPlayingMovie: Movie[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getNowPlayingMovies().subscribe((data)=>{
      this.nowPlayingMovie = data.results
    })
  }
}
