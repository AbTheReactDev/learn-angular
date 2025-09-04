import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css',
})
export class Bindings {
  constructor(private router: Router) {}

  isEditable = true;
  message = 'Hover Me';

  greet() {
    alert('You are a good person. Keep Smiling :)');
  }

  showMessage() {
    this.message = 'Please click me !';
  }

  hideMessage() {
    this.message = 'Hover me !';
  }

  goToPrev() {
    this.router.navigate(['/']);
  }
  goToNext() {
    this.router.navigate(['/props']);
  }
}
