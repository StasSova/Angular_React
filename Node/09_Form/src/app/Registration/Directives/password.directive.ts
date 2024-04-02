import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordDirective, multi: true },
  ],
})
export class PasswordDirective implements Validator {
  private specialCharacters: string = `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`;

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value || value.length < 8) {
      return { passwordLength: true };
    }

    // Проверка наличия минимум одной заглавной буквы, одной строчной буквы и одного специального символа
    const regex = new RegExp(
      `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[${this.specialCharacters}])(?!.* ).{8,16}$`
    );
    if (!regex.test(value)) {
      return { passwordComplexity: true };
    }

    return null;
  }
}
