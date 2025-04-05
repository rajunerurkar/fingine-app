import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
  selector: 'app-mutual-fund',
  standalone: true,
  imports: [CommonModule, RouterModule,ContactModalComponent],
  templateUrl: './mutual-fund.component.html',
  styleUrl: './mutual-fund.component.css'
})
export class MutualFundComponent {

  showModal = false;

signup() {
  this.showModal = true;
}
closeModal() {
  this.showModal = false;
}
}