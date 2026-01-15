import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  name: string;
  count?: number;
  subcategories?: Category[];
  expanded?: boolean;
}

@Component({
  selector: 'app-category-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-sidebar.html',
  styleUrl: './category-sidebar.css'
})
export class CategorySidebarComponent {
  @Input() categories: Category[] = [];

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }
}
