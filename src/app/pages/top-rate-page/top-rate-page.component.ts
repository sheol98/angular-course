import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { Movie } from '../../models/movie.model';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
    selector: 'app-top-rate-page',
    standalone: true,
    templateUrl: './top-rate-page.component.html',
    styleUrl: './top-rate-page.component.scss',
    imports: [MovieCardComponent, MovieListComponent]
})
export class TopRatePageComponent implements OnInit {
  topRate: Movie[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getTopRate().subscribe((data)=>{
      this.topRate = data.results
    })
  }
}
