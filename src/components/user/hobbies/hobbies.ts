import { Component, input } from '@angular/core';
import { Hobby } from '../../../types/types';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies {
  hobbies = input<Hobby[]>([])
}
