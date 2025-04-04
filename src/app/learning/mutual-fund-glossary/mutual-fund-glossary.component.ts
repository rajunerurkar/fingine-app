import { Component } from '@angular/core';

@Component({
  selector: 'app-mutual-fund-glossary',
  imports: [],
  templateUrl: './mutual-fund-glossary.component.html',
  styleUrl: './mutual-fund-glossary.component.css'
})
export class MutualFundGlossaryComponent {
  downloadPdf() {
    // You can add tracking or analytics here
    console.log('Mutual Fund Glossary PDF download initiated');
  }
}
