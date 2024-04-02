import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appUsername]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: UsernameDirective, multi: true },
  ],
})
export class UsernameDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value || value.length < 6) {
      return { usernameLength: true };
    }

    // Проверка наличия цифр и специальных символов, кроме подчеркивания (_) и дефиса (-)
    const regex = /^[a-zA-Z0-9_-]*$/;
    if (!regex.test(value)) {
      return { usernameFormat: true };
    }

    return null;
  }
}
