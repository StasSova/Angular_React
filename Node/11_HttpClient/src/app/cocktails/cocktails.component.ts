import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../Services/api.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css',
})
export class CocktailsComponent implements OnInit {
  cocktails!: Observable<any>;
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.cocktails = this.api.getCocktails();
  }
}
