import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';

interface deliveryType {
  value: string;
  title: string;
}

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css',
})
export class ReactFormComponent implements OnInit {
  form!: FormGroup;

  deliveryTypes: deliveryType[] = [
    { value: 'NP', title: 'Нова пошта' },
    { value: 'UP', title: 'Укрпошта' },
    { value: 'Meest', title: 'Міст Експрес' },
  ];

  isSubmitted: boolean = false;
  formData = {};

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^[\+ ]?3?[\s]?8?[\s]?[\( ]?0\d{2}?[\) ]?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/
          ),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\d]{2,}$/),
        ]),
        surname: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\d]{2,}$/),
        ]),
        surname2: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\d]{2,}$/),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      delivery: new FormGroup({
        type: new FormControl('NP', Validators.required),
        city: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\d]{2,}$/),
        ]),
        street: new FormControl('', Validators.required),
        department: new FormControl('', Validators.required),
      }),
      confirmation: new FormGroup({
        confirm: new FormControl('', Validators.required),
      }),
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    console.log(this.form);
  }
}
