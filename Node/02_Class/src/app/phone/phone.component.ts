import { Component } from '@angular/core';

type ImageCollection = {
  image: string;
  color: string;
};

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
})
export class PhoneComponent {
  public currentImage: ImageCollection;
  public images: ImageCollection[] = [
    {
      image: 'https://content2.rozetka.com.ua/goods/images/big/364834252.jpg',
      color: '#666666',
    },
    {
      image: 'https://content1.rozetka.com.ua/goods/images/big/364834195.jpg',
      color: '#000000',
    },
    {
      image: 'https://content.rozetka.com.ua/goods/images/big/364834229.jpg',
      color: '#3333ff',
    },
    {
      image: 'https://content.rozetka.com.ua/goods/images/big/364834211.jpg',
      color: '#ffffff',
    },
  ];
  constructor() {
    this.currentImage = this.images[0];
  }

  changeImage(img: ImageCollection) {
    this.currentImage = img;
  }
}
