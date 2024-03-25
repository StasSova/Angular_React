import { Component } from '@angular/core';
import { petsData } from '../../assets/pets';

interface Pet {
  name: string;
  species?: string;
  favFoods?: string[];
  birthYear?: number;
  photo?: string;
}

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  public pets: Pet[] = petsData;
  public selectedPet?: Pet;

  changePet(newPet: Pet) {
    this.selectedPet = newPet;
  }
}
