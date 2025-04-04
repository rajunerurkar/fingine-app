import { Component } from '@angular/core';

@Component({
  selector: 'app-pms',
  imports: [],
  templateUrl: './pms.component.html',
  styleUrl: './pms.component.css'
})
export class PmsComponent {
  signup() {
    // Implement your signup logic here
    console.log('Signup clicked');
    // You might want to open a modal or navigate to a contact page
  }
}
