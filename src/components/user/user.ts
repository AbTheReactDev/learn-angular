import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Hobbies } from './hobbies/hobbies';
import { Hobby } from '../../types/types';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Hobbies, NgOptimizedImage],
})
export class User {
  constructor(private router: Router) {}
  protected readonly name = signal('Abhishek Mestri');
  designation = 'Software Developer';

  aboutMe =
    'Hey There, This is Abhishek Sanjay Mestri, I am from Ratnagiri, popular for Hapus Mangoes';
  isKokani = true;

  myHobbies: Hobby[] = [
    { id: 0, name: 'Playing Cricket' },
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Bike Riding' },
    { id: 3, name: 'Travelling' },
    { id: 4, name: 'Playing Dholki' },
  ];

  goToNext() {
    this.router.navigate(['/bindings']);
  }
}
