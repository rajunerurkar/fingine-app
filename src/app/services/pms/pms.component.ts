import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
  selector: 'app-pms',
  imports: [ContactModalComponent],
  templateUrl: './pms.component.html',
  styleUrl: './pms.component.css'
})
export class PmsComponent {
  showModal = false;

  signup() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
