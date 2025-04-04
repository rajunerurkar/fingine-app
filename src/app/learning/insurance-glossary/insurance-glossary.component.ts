import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-glossary',
  imports: [],
  templateUrl: './insurance-glossary.component.html',
  styleUrl: './insurance-glossary.component.css'
})
export class InsuranceGlossaryComponent {
  downloadPdf() {
    // You can implement additional download logic here if needed
    console.log('PDF download initiated');
  }
}
