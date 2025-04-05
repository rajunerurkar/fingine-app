import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
  selector: 'app-home-loans',
  imports: [ContactModalComponent],
  templateUrl: './home-loans.component.html',
  styleUrl: './home-loans.component.css'
})
export class HomeLoansComponent {
  showModal = false;

  signup() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
