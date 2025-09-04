import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  favoriteFramework = '';

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  showFramework() {
    alert(this.favoriteFramework);
  }

  handleSubmit() {
    alert(`${this.profileForm.value.name} | ${this.profileForm.value.email}`);
  }

  clearForm() {
    console.log('Clicked');
    // all form values reset
    this.profileForm.reset()
    // specific value reset
    this.profileForm.reset({
      name: '',
      email: '',
    });
    // single value reset
    this.profileForm.get('name')?.reset()
  }
}
