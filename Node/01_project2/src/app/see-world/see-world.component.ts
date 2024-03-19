import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, toArray } from 'rxjs/operators';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-see-world',
  templateUrl: './see-world.component.html',
  styleUrls: ['./see-world.component.css'],
})
export class SeeWorldComponent {
  articles: any[] = [];

  private readonly CLIENT_ID = 'If_SIBvmw2rng8TSx70kxw4SKyKyqFPF_UfOH6raTvI';
  private readonly COUNT_PHOTOS_BY_GET = 25;
  private readonly UNSPLASH_API_URL = `https://api.unsplash.com/photos/random`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initArticles();
  }

  async initArticles(): Promise<void> {
    try {
      // Получение случайных названий коллекций (пример)
      const randomCollections = [
        'Nature',
        'Architecture',
        'Travel',
        'Wallpapers',
      ];
      const orientation = 'portrait';

      for (const collection of randomCollections) {
        const photos = randomInt(1, 6);
        const url = `${this.UNSPLASH_API_URL}?query=${collection}&orientation=${orientation}&count=${photos}&client_id=${this.CLIENT_ID}`;
        const response = await this.http.get<any[]>(url).toPromise();

        console.log(response);

        if (Array.isArray(response) && response.length > 0) {
          const images = response.map(
            ({ urls: { regular }, alt_description, description }) => {
              return {
                src: regular,
                title: alt_description || 'Untitled',
                text: description,
              };
            }
          );
          const collectionData = { title: collection, images };
          this.articles.push(collectionData);
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
}
