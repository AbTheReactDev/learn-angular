import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  constructor(private router: Router) {}
  title = input<string>(); // input is props in React
  counter = input<number>();

  increment = output<void>();
  decrement = output<void>();

  goToPrev() {
    this.router.navigate(['/bindings']);
  }

  goToNext() {
    this.router.navigate(['/forms']);
  }
}
