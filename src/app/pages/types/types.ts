import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySidebarComponent, Category } from '../../shared/components/category-sidebar/category-sidebar';
import { FilePreviewCardComponent } from '../../shared/components/file-preview-card/file-preview-card';
import { FileDetailsModalComponent } from '../../shared/components/file-details-modal/file-details-modal';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule, CategorySidebarComponent, FilePreviewCardComponent, FileDetailsModalComponent],
  templateUrl: './types.html',
  styleUrl: './types.css',
})
export class Types {
  selectedItem: Item | null = null;
  showModal: boolean = false;

  openModal(item: Item) {
    this.selectedItem = item;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedItem = null;
  }

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
    { title: 'Bloques de puertas y ventanas', image: 'https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '2.2k', views: '12k' },
    { title: 'Aberturas de aluminio', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80', type: 'RFA', size: '10M', views: '5k' },
    { title: 'Puertas', image: 'https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&w=300&q=80', type: 'SKP', size: '2.1k', views: '8k' },
    { title: 'Detalles de ventanas', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '1.5k', views: '3k' },
    { title: 'Detalles de ventanas en centro', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '5.9k', views: '15k' },
    { title: 'Detalles puerta vidriera', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '5.4k', views: '9k' },
    { title: 'Detalle de tragaluz con sistema', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '2.7k', views: '4k' },
    { title: 'Detalles de puerta maciza', image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '12.3k', views: '20k' },
    { title: 'Puerta enrollable', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=300&q=80', type: 'MAX', size: '4.8k', views: '6k' },
    { title: 'Modelos de portones modernos', image: 'https://images.unsplash.com/photo-1621293954908-eae6580f12c0?auto=format&fit=crop&w=300&q=80', type: 'SKP', size: '12.9k', views: '18k' },
    { title: 'Bloques dinámicos de aberturas', image: 'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&w=300&q=80', type: 'DWG', size: '117.7k', views: '50k' },
    { title: 'Familia de puerta vaivén', image: 'https://images.unsplash.com/photo-1582239634373-c84022b823e4?auto=format&fit=crop&w=300&q=80', type: 'RFA', size: '3.9k', views: '7k' },
  ];
}
