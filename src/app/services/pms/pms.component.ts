import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pms',
  imports: [CommonModule, RouterModule,ContactModalComponent],
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
