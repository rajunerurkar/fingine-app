import { Component } from '@angular/core';

@Component({
  selector: 'app-home-loans',
  imports: [],
  templateUrl: './home-loans.component.html',
  styleUrl: './home-loans.component.css'
})
export class HomeLoansComponent {
  signup() {
    // Implement your signup logic here
    console.log('Signup clicked');
    // You might want to open a modal or navigate to a contact page
  }
}
