import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatNumberPipe } from '../../pipes/format-number.pipe';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  imports: [FormatNumberPipe, CardModule, ButtonModule],
})
export class MovieCardComponent {
  constructor(private movieService: MovieService) {}
  @Input() data!: Movie;

  onAddToFavorite(data: any) {
    this.movieService.setToFavorites(data);
  }
  onAddToWatchList(data: any) {
    this.movieService.setToWatchLater(data);
  }
}
