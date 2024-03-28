import { Component } from '@angular/core';
import { Group, Audience } from '../classes';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrl: './main-comp.component.css',
})
export class MainCompComponent {
  groups: Group[];
  audiences: Audience[];
  selectedGroup: Group;
  faculties: string[];
  selectedFaculty: string;

  isLightTheme: boolean = true;

  constructor() {
    this.groups = [
      new Group('all', 0, ''),
      new Group('Engineering Group', 25, 'Engineering Faculty'),
      new Group('Computer Science Group', 30, 'Computer Science Faculty'),
      new Group('Mathematics Group', 20, 'Mathematics Faculty'),
      new Group('Physics Group', 15, 'Physics Faculty'),
      new Group('Biology Group', 18, 'Biology Faculty'),
    ];

    this.audiences = [
      new Audience('Auditorium 101', 50, 'Engineering Faculty'),
      new Audience('Auditorium 102', 40, 'Computer Science Faculty'),
      new Audience('Auditorium 103', 35, 'Mathematics Faculty'),
      new Audience('Auditorium 104', 30, 'Physics Faculty'),
      new Audience('Auditorium 105', 25, 'Biology Faculty'),
    ];

    this.faculties = this.audiences.map((x) => x.faculty);
    this.selectedFaculty = 'all';
    this.selectedGroup = this.groups[0];
  }

  handlerGroupClick(group: Group) {
    this.selectedGroup = { ...group };
  }

  handleAudienceClick(aud: Audience) {}

  sortByCapacity() {
    this.audiences.sort((a, b) => a.capacity - b.capacity);
  }

  sortByName() {
    this.audiences.sort((a, b) => a.name.localeCompare(b.name));
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
  }
}
