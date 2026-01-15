import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySidebarComponent, Category } from '../../shared/components/category-sidebar/category-sidebar';

interface Item {
  title: string;
  image: string;
  type: string;
  size: string;
  views: string;
}

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule, CategorySidebarComponent],
  templateUrl: './types.html',
  styleUrl: './types.css',
})
export class Types {
  categories: Category[] = [
    {
      name: '3D',
      expanded: true,
      subcategories: [
        {
          name: 'MECÁNICA',
          expanded: true,
          subcategories: [
            { name: 'ELEMENTOS DE MÁQUINA', count: 44 },
            { name: 'ESTRUCTURAS METÁLICAS', count: 15 },
            { name: 'INSTALACIONES MEP', count: 12 },
            { name: 'MECANISMOS Y MÁQUINAS', count: 22 },
          ]
        },
        {
          name: 'ARQUITECTURA',
          expanded: true,
          subcategories: [
            { name: 'VIVIENDA', count: 124 },
            { name: 'MOBILIARIO', count: 51 },
            { name: 'PAISAJISMO', count: 221 },
          ]
        }
      ]
    },
    {
      name: 'PLANOS',
      expanded: true,
      subcategories: [
        {
          name: 'MECÁNICA',
          expanded: true,
          subcategories: [
            { name: 'GENERAL', count: 10 }
          ]
        },
        {
          name: 'ARQUITECTURA',
          expanded: true,
          subcategories: [
            { name: 'GENERAL', count: 35 }
          ]
        }
      ]
    }
  ];

  items: Item[] = [
    { title: 'Bloques de puertas y ventanas', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '2.2k', views: '12k' },
    { title: 'Aberturas de aluminio', image: 'https://via.placeholder.com/300x200', type: 'RFA', size: '10M', views: '5k' },
    { title: 'Puertas', image: 'https://via.placeholder.com/300x200', type: 'SKP', size: '2.1k', views: '8k' },
    { title: 'Detalles de ventanas', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '1.5k', views: '3k' },
    { title: 'Detalles de ventanas en centro', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '5.9k', views: '15k' },
    { title: 'Detalles puerta vidriera', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '5.4k', views: '9k' },
    { title: 'Detalle de tragaluz con sistema', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '2.7k', views: '4k' },
    { title: 'Detalles de puerta maciza', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '12.3k', views: '20k' },
    { title: 'Puerta enrollable', image: 'https://via.placeholder.com/300x200', type: 'MAX', size: '4.8k', views: '6k' },
    { title: 'Modelos de portones modernos', image: 'https://via.placeholder.com/300x200', type: 'SKP', size: '12.9k', views: '18k' },
    { title: 'Bloques dinámicos de aberturas', image: 'https://via.placeholder.com/300x200', type: 'DWG', size: '117.7k', views: '50k' },
    { title: 'Familia de puerta vaivén', image: 'https://via.placeholder.com/300x200', type: 'RFA', size: '3.9k', views: '7k' },
  ];
}
