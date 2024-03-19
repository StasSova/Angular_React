import { Component } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css',
})
export class ProviderComponent {
  names: string[];
  constructor() {
    this.names = ['Matrix', 'Electron', 'Softportal', 'VELLOPT'];
  }
}
