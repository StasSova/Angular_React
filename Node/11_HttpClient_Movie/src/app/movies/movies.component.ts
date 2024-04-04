import { Component, OnInit } from '@angular/core';
import { Movie, MovieDetails } from '../Interfaces';
import { MovieAPIService } from '../Services/movie-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movieTypes: string[] = ['movie', 'series', 'episode'];
  moviesData: Movie[] = [];
  currentPage: number = 1;
  pagesArray: number[] = [];

  form!: FormGroup;

  selectedMovie: MovieDetails | undefined;

  constructor(private api: MovieAPIService) {}

  async ngOnInit(): Promise<void> {
    this.form = new FormGroup({
      title: new FormControl('Titanic', [Validators.required]),
      type: new FormControl('movie', Validators.required),
    });
    this.currentPage = 1;
    const moviesResult = await this.api.getMovies(
      'Titanic',
      'movie',
      this.currentPage
    );
    console.log(moviesResult);
    if (moviesResult && moviesResult.Search) {
      this.moviesData = moviesResult.Search;
      this.pagesArray = Array.from(
        { length: +moviesResult.totalResults / 10 },
        (_, i) => i + 1
      );
    } else {
      this.moviesData = [];
    }
  }

  async getMovie(page: number = 1) {
    let formData = this.form.value;
    console.log('getMovie command');
    console.log(formData);
    this.currentPage = page;
    const moviesResult = await this.api.getMovies(
      formData.title,
      formData.type,
      this.currentPage
    );
    console.log(moviesResult);
    if (moviesResult && moviesResult.Search) {
      this.pagesArray = Array.from(
        { length: +moviesResult.totalResults / 10 },
        (_, i) => i + 1
      );
      this.moviesData = moviesResult.Search;
    } else {
      this.moviesData = [];
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.getMovie(this.currentPage - 1);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.pagesArray.length) {
      this.getMovie(this.currentPage + 1);
    }
  }

  async getDetail(imdbID: string) {
    try {
      let data = await this.api.getMovie(imdbID);
      if (data) this.selectedMovie = data;
    } catch (ex) {
      console.log('Get detail movie: ', ex);
    }
  }
}
