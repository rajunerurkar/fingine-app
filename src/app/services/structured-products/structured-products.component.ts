import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
  selector: 'app-structured-products',
  imports: [ContactModalComponent],
  templateUrl: './structured-products.component.html',
  styleUrl: './structured-products.component.css'
})
export class StructuredProductsComponent {
  showModal = false;

  signup() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
