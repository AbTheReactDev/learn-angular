import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { StarPipe } from '../../pipes/star.pipe';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-services',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, ReversePipe, StarPipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  carService = inject(CarService);

  today = new Date();
  salary = 100000;
  display = this.carService.getCars().join(' ⭐️ ');
}
