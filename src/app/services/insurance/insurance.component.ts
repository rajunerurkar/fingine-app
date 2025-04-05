import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-insurance',
  imports: [CommonModule, RouterModule,ContactModalComponent],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {
  showModal = false;

  signup() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
