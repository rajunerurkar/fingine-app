import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
export interface Testimonial {
  name: string;
  photoUrl: string;
  feedback: string;
  title?: string;
  company?: string;
}


@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-slider.component.html',
  styleUrl: './testimonials-slider.component.css'
})
export class TestimonialSliderComponent implements OnInit, OnDestroy {

  @Input() testimonials: Testimonial[] = [];
  @Input() slideInterval = 8000; // 8 seconds

  currentIndex = 0;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.testimonials.length > 2) {
       this.startSlider();
    }
  }

  ngOnDestroy(): void {
    this.clearSliderInterval();
  }

  startSlider(): void {
    this.clearSliderInterval();
    this.intervalId = setInterval(() => {
      this.showNextTestimonials();
      this.cdr.markForCheck(); // Trigger change detection with OnPush
    }, this.slideInterval);
  }

  clearSliderInterval(): void {
     if (this.intervalId) {
       clearInterval(this.intervalId);
       this.intervalId = null;
     }
  }

  showNextTestimonials(): void {
    const step = 2; // Show 2 at a time
    this.currentIndex = (this.currentIndex + step) % this.testimonials.length;
  }

  getNextIndex(current: number): number {
    return (current + 1) % this.testimonials.length;
  }
}