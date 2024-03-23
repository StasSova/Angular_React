import { Component } from '@angular/core';
import { books } from '../../assets/books';

interface Book {
  title: string;
  author: string;
  image: string;
  year: number;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  public books = books;
  selectedBook: Book = {} as Book;
  changeBook(id: number) {
    this.selectedBook = books[id];
  }
}
