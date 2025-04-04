import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}
   navigateToMutualFund(){
     this.router.navigate(['/services/mutual-fund']);
   }
   navigateTo(path: string) {
     this.router.navigate([path]);
   }
 
 
  currentYear: number = new Date().getFullYear();

}
