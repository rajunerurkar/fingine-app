import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mutual-fund',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mutual-fund.component.html',
  styleUrl: './mutual-fund.component.css'
})
export class MutualFundComponent {


signup() {
  // Implement your signup logic here
  console.log('Signup clicked');
  // You might want to open a modal or navigate to a contact page
}
}