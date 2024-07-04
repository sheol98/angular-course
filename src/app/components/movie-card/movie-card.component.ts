import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatNumberPipe } from '../../pipes/format-number.pipe';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  imports: [FormatNumberPipe,CardModule,ButtonModule],
})
export class MovieCardComponent {
  @Input() data: any;
  @Output() addToFavorite = new EventEmitter<any>();
  @Output() addToWatchList = new EventEmitter<any>();

  onAddToFavorite() {
    this.addToFavorite.emit();
  }
  onAddToWatchList() {
    this.addToWatchList.emit();
  }
}
