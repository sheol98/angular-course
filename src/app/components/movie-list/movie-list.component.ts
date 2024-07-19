import { Component, Input, input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  imports: [MovieCardComponent, CommonModule, CardModule],
})
export class MovieListComponent {
  @Input() movieList!: Movie[]
}
