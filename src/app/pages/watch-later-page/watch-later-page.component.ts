import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-watch-later-page',
  standalone: true,
  imports: [],
  templateUrl: './watch-later-page.component.html',
  styleUrl: './watch-later-page.component.scss',
})
export class WatchLaterPageComponent {
  constructor(private movieService: MovieService) {}
  
}
