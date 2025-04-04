import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  navigateToMutualFund(){
    this.router.navigate(['/services/mutual-fund']);
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
