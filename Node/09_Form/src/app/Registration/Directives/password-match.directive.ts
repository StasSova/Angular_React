import { Directive, Input } from '@angular/core';
import {
  Validator,
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    },
  ],
})
export class PasswordMatchDirective implements Validator {
  @Input('appPasswordMatch') passwordToMatch!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get(this.passwordToMatch);
    if (password && control.value !== password.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
