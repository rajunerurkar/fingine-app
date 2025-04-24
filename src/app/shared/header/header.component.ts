import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, RouterLink, RouterLinkActive], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef<HTMLButtonElement>;
  @ViewChild('navbarNav') navbarNav!: ElementRef<HTMLDivElement>;
  isNavbarMenuOpen: boolean = true;

  private shownListenerUnlisten!: () => void;
  private hiddenListenerUnlisten!: () => void;
 
  constructor(private cdr: ChangeDetectorRef,private router: Router,private renderer: Renderer2) {}
  
  ngOnInit(): void {
    
  }
  
  navigateTo(urlWithFragment: string): void {
    // Separate base url and fragment
    const [url, fragment] = urlWithFragment.split('#');
    if (fragment) {
      this.router.navigate([url], { fragment: fragment });
    } else {
      this.router.navigate([url]); // Or navigateByUrl
    }

    if (this.navbarToggler.nativeElement.offsetParent !== null) {
       if (this.navbarNav.nativeElement.classList.contains('show')) {
        this.isNavbarMenuOpen = true;
        this.navbarToggler.nativeElement.click();
     }
     else {
     this.isNavbarMenuOpen = false;
     }
    }
     if (this.isNavbarMenuOpen && this.navbarNav && this.navbarNav.nativeElement.classList.contains('show')) {
      
     }
    }
    ngAfterViewInit(): void {
      // Ensure the elementRef is available
      if (this.navbarNav && this.navbarNav.nativeElement) {
        const navElement = this.navbarNav.nativeElement;
  
        // --- Listen for Bootstrap Collapse Events ---
  
         this.shownListenerUnlisten = this.renderer.listen(navElement, 'shown.bs.collapse', () => {

          this.isNavbarMenuOpen = false;
        //   this.cdr.detectChanges();
        });
  
        this.hiddenListenerUnlisten = this.renderer.listen(navElement, 'hidden.bs.collapse', () => {
          this.isNavbarMenuOpen = true;
         // this.cdr.detectChanges();
        });
  
  
      } else {
      
      }
    }
  
    ngOnDestroy(): void {
         if (this.shownListenerUnlisten) {
        this.shownListenerUnlisten();
      }
      if (this.hiddenListenerUnlisten) {
        this.hiddenListenerUnlisten();
      }
    }
  }


