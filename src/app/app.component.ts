import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from "./components/movie-card/movie-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MovieListComponent, MovieCardComponent]
})
export class AppComponent {
  title = 'angular-course';
}
