import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance',
  imports: [],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {
  signup() {
    // Implement your signup logic here
    console.log('Signup clicked');
    // You might want to open a modal or navigate to a contact page
  }
}
