import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestimonialSliderComponent,Testimonial } from '../testimonials-slider/testimonials-slider.component';

@Component({
  selector: 'app-testimonials-page',
  standalone: true,
  imports: [CommonModule, TestimonialSliderComponent],
  templateUrl: './testimonials-page.component.html',
  styleUrl: './testimonials-page.component.css'
})
export class TestimonialsPageComponent {
  testimonialData: Testimonial[] = [
    { name: 'Mark Colgan Example', photoUrl: '/assets/images/mark.jpg', feedback: 'This is example feedback...', title: 'Digital Marketing Manager', company: 'The Local Data Company' },
    { name: 'Jane Doe Example', photoUrl: '/assets/images/jane.jpg', feedback: 'Another testimonial example...', title: 'Small Business Owner' },
    { name: 'John Smith Example', photoUrl: '/assets/images/john.jpg', feedback: 'A third testimonial...', title: 'CEO', company: 'Smith & Co.' },
    { name: 'Alice Brown Example', photoUrl: '/assets/images/alice.jpg', feedback: 'The fourth example...', title: 'Investor'}
    // ... add more testimonials provided by Fingine Team
  ];
}
