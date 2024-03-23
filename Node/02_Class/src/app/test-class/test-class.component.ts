import { Component } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrl: './test-class.component.css',
})
export class TestClassComponent {
  public isBold: boolean = false;
  public isItalic: boolean = false;
  public isUnderline: boolean = false;
  public isUppercase: boolean = false;
  public fontSize: number = 12;
  public color: string = 'black';
  public fontFamily: string = 'Verdana';

  isBoldToggle() {
    this.isBold = !this.isBold;
  }

  isItalicToggle() {
    this.isItalic = !this.isItalic;
  }

  isUnderlineToggle() {
    this.isUnderline = !this.isUnderline;
  }

  isUppercaseToggle() {
    this.isUppercase = !this.isUppercase;
  }

  // changeTextSize(size: string) {
  //   this.fontSize = parseInt(size);
  // }
}
