import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  // Paths to your newsletter images within the assets folder
  newsletterPage1Url = './img/newsletter/newsletter-page-1.jpeg';
  newsletterPage2Url = null;
}