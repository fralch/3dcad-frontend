import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-file-details-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-details-modal.html',
  styleUrl: './file-details-modal.css'
})
export class FileDetailsModalComponent {
  @Input() item: Item | null = null;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
