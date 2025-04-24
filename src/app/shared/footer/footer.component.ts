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
   
   navigateTo(urlWithFragment: string): void {
    // Separate base url and fragment
    const [url, fragment] = urlWithFragment.split('#');
    if (fragment) {
      this.router.navigate([url], { fragment: fragment });
    } else {
      this.router.navigate([url]); // Or navigateByUrl
    }
  }
 
  currentYear: number = new Date().getFullYear();

}
