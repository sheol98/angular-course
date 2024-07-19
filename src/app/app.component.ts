import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  providers: [MovieService],
  styleUrl: './app.component.scss',
  imports: [
    MovieListComponent,
    MovieCardComponent,
    RouterOutlet,
    SidebarComponent,
    RouterModule,
    RouterLink,
    FormsModule,
    NgClass,
    ReactiveFormsModule,
    HeaderComponent,
  ],
})
export class AppComponent implements OnInit {
  movieList: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovieList().subscribe((data) => {
      this.movieList = data.results;
      console.log(this.movieList);
    });
  }

  title = 'angular-course';
}
