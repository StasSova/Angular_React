import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../Interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Output() onDetail = new EventEmitter();
  @Input() movie!: Movie;

  onDetailCommand() {
    this.onDetail.emit(this.movie.imdbID);
  }
}
