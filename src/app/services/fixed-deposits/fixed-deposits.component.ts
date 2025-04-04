import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-deposits',
  imports: [],
  templateUrl: './fixed-deposits.component.html',
  styleUrl: './fixed-deposits.component.css'
})
export class FixedDepositsComponent {
  signup() {
    // Implement your signup logic here
    console.log('Signup clicked');
    // You might want to open a modal or navigate to a contact page
  }

  openExternalLink() {
    window.open('https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=89212&utm_source=IFA_Prime&utm_medium=B2B&utm_campaign=IFA_Prime', '_blank');
  }
}
