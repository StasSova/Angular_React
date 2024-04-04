import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MovieDetails, MovieSearchResult } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  readonly USER_KEY = 'a763b2ff';
  constructor(private client: HttpClient) {}

  async getMovies(
    title: string,
    type: string,
    page: number
  ): Promise<MovieSearchResult | null> {
    try {
      const url = `https://www.omdbapi.com/?apikey=${this.USER_KEY}&s=${title}&type=${type}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok && data) {
        return data;
      } else {
        throw new Error('No movies found.');
      }
    } catch (ex) {
      console.error(ex);
      return null;
    }
  }

  async getMovie(imdbID: string): Promise<MovieDetails | null> {
    try {
      const url = `https://www.omdbapi.com/?apikey=${this.USER_KEY}&i=${imdbID}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error('Failed to fetch movie details.');
      }
    } catch (ex) {
      console.error(ex);
      return null;
    }
  }
}
