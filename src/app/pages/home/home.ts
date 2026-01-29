import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CATEGORIES } from '../../core/constants/categories';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
    console.log('Home component initialized');
  }

  categories = CATEGORIES;

  featuredCollections = [
    { title: 'Estilo Japonés', items: 17, image: 'https://placehold.co/300x200/333/fff?text=Japones' },
    { title: 'Estilo nórdico', items: 45, image: 'https://placehold.co/300x200/333/fff?text=Nordico' },
    { title: 'Salón de audio', items: 22, image: 'https://placehold.co/300x200/333/fff?text=Audio' },
    { title: 'Equipamiento urbano', items: 31, image: 'https://placehold.co/300x200/333/fff?text=Urbano' }
  ];

  premiumWorks = Array(8).fill({
    title: 'Proyecto Ejemplo Premium',
    type: 'DWG',
    views: '1.2k',
    image: 'https://placehold.co/400x300/252525/fff?text=Premium'
  });

  freeWorks = Array(8).fill({
    title: 'Proyecto Ejemplo Gratis',
    type: 'SKP',
    views: '850',
    image: 'https://placehold.co/400x300/e5e5e5/333?text=Free'
  });

  // Helper to get flattened subcategories for the filter bar
  get allSubcategories() {
    const subs: any[] = [];
    this.categories.forEach(cat => {
      cat.subcategories.forEach(sub => {
        subs.push({
          ...sub,
          parentCategory: cat.name
        });
      });
    });
    return subs;
  }
}

