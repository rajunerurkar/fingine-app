import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MutualFundComponent } from './services/mutual-fund/mutual-fund.component';
import { PmsComponent } from './services/pms/pms.component';
import { InsuranceComponent } from './services/insurance/insurance.component';
import { HomeLoansComponent } from './services/home-loans/home-loans.component';
import { FixedDepositsComponent } from './services/fixed-deposits/fixed-deposits.component';
import { StructuredProductsComponent } from './services/structured-products/structured-products.component';
import { InsuranceGlossaryComponent } from './learning/insurance-glossary/insurance-glossary.component';
import { MutualFundGlossaryComponent } from './learning/mutual-fund-glossary/mutual-fund-glossary.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'services/mutual-fund', component: MutualFundComponent },
    { path: 'services/pms', component: PmsComponent },
    { path: 'services/insurance', component: InsuranceComponent },
    { path: 'services/home-loans', component: HomeLoansComponent, title: 'Home Loans' },
    { path: 'services/fixed-deposits', component: FixedDepositsComponent, title: 'Fixed Deposits' },
    { 
        path: 'services/structured-products', 
        component: StructuredProductsComponent,
        title: 'Structured Products' 
      },
      { 
        path: 'learning/insurance-glossary', 
        component: InsuranceGlossaryComponent,
        title: 'Insurance Glossary' 
      },
      { 
        path: 'learning/mutual-fund-glossary', 
        component: MutualFundGlossaryComponent,
        title: 'Mutual Fund Glossary' 
      },
      { 
        path: 'faq', 
        component: FaqComponent,
        title: 'FAQ' 
      },
      { 
        path: 'about', 
        component: AboutComponent,
        title: 'About Us' 
      },
      { 
        path: 'contact', 
        component: ContactComponent,
        title: 'Contact Us' 
      }
];
