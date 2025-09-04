import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  title = 'Component Input Properties';
  parentCouter = 0;

  increment() {
    this.parentCouter++;
  }

  decrement() {
    this.parentCouter--;
  }
}
