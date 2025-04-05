import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css'
})
export class ContactModalComponent {
    @Output() closeModal = new EventEmitter<void>();
  
    contactForm = {
      name: '',
      email: '',
      mobileNo: '',
      subject: 'Mutual Funds',
      message: ''
    };
  
    onSubmit() {
      console.log('Form submitted:', this.contactForm);
      // Here you would typically send the form data to your backend
      this.closeModal.emit();
    }
  
    onClose() {
      this.closeModal.emit();
    }
  }
