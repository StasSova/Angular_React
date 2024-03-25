import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css',
})
export class TextEditorComponent {
  constructor() {
    this.message = 'Hello World';
    this.fontSize = 12;
    this.colorText = '#3d6ee1';
  }
  message: string;
  fontSize: number;
  colorText: string;
}
