import { Component } from '@angular/core';
import { Input } from '@angular/core';

interface Pet {
  name: string;
  species?: string;
  favFoods?: string[];
  birthYear?: number;
  photo?: string;
}

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css',
})
export class PetDetailComponent {
  @Input() selectedPet?: Pet;

  getAge(): string {
    if (!this.selectedPet || !this.selectedPet.birthYear) return '';

    const currentYear = new Date().getFullYear();
    const birthYear = this.selectedPet.birthYear;
    const age = currentYear - birthYear;

    if (age === 0) {
      return 'Less than a year old';
    } else if (age === 1) {
      return '1 year old';
    } else if (age > 1) {
      return `${age} years old`;
    } else {
      return 'Invalid birth year';
    }
  }
}
