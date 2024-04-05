import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyLocation } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocationAPIService {
  constructor(private http: HttpClient) {}

  MyGet(): Observable<MyLocation[]> {
    let data: Observable<MyLocation[]> = this.http.get<MyLocation[]>(
      'http://localhost:3000/locations'
    );
    console.log(data);
    return data;
  }

  add(
    id: number = 0,
    name: string = '',
    city: string = 'aaa',
    state: string = 'aaa',
    photo: string = 'aaa',
    availableUnits: string = 'aaa',
    wifi: boolean = true,
    laundry: boolean = true
  ) {
    console.log(city);
    const data: MyLocation = {
      id: id,
      name: name,
      city: city,
      state: state,
      photo: photo,
      availableUnits: availableUnits,
      wifi: wifi,
      laundry: laundry,
    };

    return this.http.post<MyLocation>('http://localhost:3000/locations', data);
  }

  update(item: MyLocation) {
    console.log('ITEM', item);
    console.log('ITEM', item.id);
    return this.http.put<MyLocation[]>(
      `http://localhost:3000/locations/${item.id}`,
      item
    );
  }

  delete(item: MyLocation) {
    return this.http.delete(`http://localhost:3000/locations/${item.id}`);
  }
}
