import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-file-preview-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-preview-card.html',
  styleUrl: './file-preview-card.css',
})
export class FilePreviewCardComponent {
  @Input() item!: Item;
}
