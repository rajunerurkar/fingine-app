import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
  selector: 'app-fixed-deposits',
  imports: [ContactModalComponent],
  templateUrl: './fixed-deposits.component.html',
  styleUrl: './fixed-deposits.component.css'
})
export class FixedDepositsComponent {
  showModal = false;

signup() {
  this.showModal = true;
}
closeModal() {
  this.showModal = false;
}
  openExternalLink() {
    window.open('https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=89212&utm_source=IFA_Prime&utm_medium=B2B&utm_campaign=IFA_Prime', '_blank');
  }
}
