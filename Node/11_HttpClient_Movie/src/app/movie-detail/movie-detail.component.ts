import { Component, Input } from '@angular/core';
import { MovieDetails } from '../Interfaces';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  @Input() movieDetails!: MovieDetails;
}
