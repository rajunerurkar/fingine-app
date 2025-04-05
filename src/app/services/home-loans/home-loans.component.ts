import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-loans',
  imports: [CommonModule, RouterModule,ContactModalComponent],
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
