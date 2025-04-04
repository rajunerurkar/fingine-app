import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = {
    name: '',
    email: '',
    mobileNo: '',
    subject: 'Mutual Funds',
    message: ''
  };

  messageSent = '';
  subjects = [
    'Mutual Funds',
    'Portfolio Management',
    'Insurance',
    'Home Loans',
    'Fixed Deposits',
    'Structured Products'
  ];

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.contactForm);
    this.messageSent = 'Thank you for your message! We will contact you soon.';
    
    // Reset form after submission
    this.contactForm = {
      name: '',
      email: '',
      mobileNo: '',
      subject: 'Mutual Funds',
      message: ''
    };
  }
}