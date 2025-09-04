import { Routes } from '@angular/router';
import { Bindings } from '../components/bindings/bindings';
import { User } from '../components/user/user';
import { Parent } from '../components/parent/parent';
import { Forms } from '../components/forms/forms';
import { Services } from '../components/services/services';
import { Products } from '../components/products/products';

export const routes: Routes = [
  { path: '', component: User, title: 'Home Page' },
  { path: 'bindings', component: Bindings, title: 'Property Binding, Event Handling' },
  { path: 'props', component: Parent, title: 'States, Counter App' },
  { path: 'forms', component: Forms, title: 'Template Driven Form' },
  { path: 'services', component: Services, title: 'Dependency Injection , Service' },
  { path: 'products', component: Products, title: 'Assal Kokani' },
];
