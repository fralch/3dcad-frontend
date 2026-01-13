import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Types } from './pages/types/types';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'types', component: Types },
];
