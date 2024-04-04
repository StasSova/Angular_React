import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private context: HttpClient) {}

  getCocktails() {
    let data: any = this.context.get<any>('/assets/cocktails.json');
    console.log(data);
    return data;
  }
}
