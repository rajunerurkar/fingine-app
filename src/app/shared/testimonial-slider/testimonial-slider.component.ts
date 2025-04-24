import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core'; // Add HostListener
import { CommonModule } from '@angular/common';

export interface Testimonial { 
  name: string;
  photoUrl: string;
  feedback: string;
  title?: string;
  company?: string;
}

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialSliderComponent implements OnInit, OnDestroy {

  @Input() testimonials: Testimonial[] = [];
  @Input() slideInterval = 3000; // 8 seconds

  currentIndex = 0;
  private intervalId: any;
 
  isAutoSliding = true;

  
  numberOfPages = 0;
  pagesArray: number[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.calculatePages();
    if (this.canSlide()) {
       this.startSlider();
    }
  }

  ngOnDestroy(): void {
    this.clearSliderInterval();
  }

  
  canSlide(): boolean {
    return this.testimonials.length > 2;
  }

  calculatePages(): void {
    if (this.testimonials.length > 0) {
      this.numberOfPages = Math.ceil(this.testimonials.length / 2);
      this.pagesArray = Array(this.numberOfPages).fill(0).map((x, i) => i);
    } else {
      this.numberOfPages = 0;
      this.pagesArray = [];
    }
  }

  startSlider(): void {
    if (!this.canSlide() || !this.isAutoSliding) return; 
    this.clearSliderInterval();
    this.intervalId = setInterval(() => {
      this.showNext();
    }, this.slideInterval);
  }

  clearSliderInterval(): void {
     if (this.intervalId) {
       clearInterval(this.intervalId);
       this.intervalId = null;
     }
  }

  resetInterval(): void {
    this.clearSliderInterval();
    this.startSlider(); 
  }

  showNext(): void {
    if (!this.canSlide()) return;
    const step = 2;
    this.currentIndex = (this.currentIndex + step) % this.testimonials.length;
    this.cdr.markForCheck();
  }

  showPrevious(): void {
    if (!this.canSlide()) return;
    const step = 2;
    
    this.currentIndex = (this.currentIndex - step + this.testimonials.length) % this.testimonials.length;
    this.cdr.markForCheck(); 
  }

  manualNext(): void {
    this.showNext();
    this.resetInterval(); 
  }

  manualPrevious(): void {
    this.showPrevious();
    this.resetInterval(); 
  }

  goToPage(pageIndex: number): void {
    if (!this.canSlide()) return;
    this.currentIndex = pageIndex * 2;
  
    if(this.currentIndex >= this.testimonials.length) {
      this.currentIndex = Math.max(0, this.testimonials.length - 2); 
       if (this.testimonials.length % 2 !== 0 && this.testimonials.length > 1) {
          this.currentIndex = this.testimonials.length - (this.testimonials.length % 2 === 0 ? 2 : 1) -1; 
        }
    }


    this.resetInterval(); 
    this.cdr.markForCheck(); 
  }

 
  @HostListener('mouseenter') onMouseEnter() {
    this.isAutoSliding = false;
    this.clearSliderInterval();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isAutoSliding = true; 
    this.startSlider(); 
  }

  
  getNextIndex(current: number): number {
    return (current + 1) % this.testimonials.length;
  }

  isDotActive(pageIndex: number): boolean {
     return this.currentIndex === pageIndex * 2 || (this.testimonials.length % 2 !== 0 && pageIndex === this.numberOfPages - 1 && this.currentIndex === this.testimonials.length - 1);
  }
}