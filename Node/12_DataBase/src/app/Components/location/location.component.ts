import { Component, OnInit } from '@angular/core';
import { LocationAPIService } from '../../Services/location-api.service';
import { Observable } from 'rxjs';
import { MyLocation } from '../../interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements OnInit {
  form!: FormGroup;

  locations!: MyLocation[];
  constructor(private api: LocationAPIService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
    this.api.MyGet().subscribe((response) => {
      this.locations = response;
    });
    console.log('End OnInit:', this.locations);
  }

  onSubmit() {
    let data = this.form.get('name')?.value;
    console.log(data);
    this.api.add(0, data).subscribe((response) => {
      console.log(response);
      this.locations.push(response);
    });
  }

  changeWifi(item: MyLocation, index: number) {
    this.api.update(item).subscribe((response) => {
      // this.locations[index] = item;
    });
  }

  onDelete(item: MyLocation) {
    this.api.delete(item).subscribe((data) => {
      console.log(data);
      this.locations = this.locations.filter((obj) => obj.id != item.id);
    });
  }
}
