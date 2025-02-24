import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lib-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-dropdown.component.html',
  styleUrls: ['./lib-dropdown.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LibDropdownComponent {
  @Output() selectionChanged = new EventEmitter<string>();
  opcions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

  onSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const value = target.value;
      this.selectionChanged.emit(value);
    }
  }
}
