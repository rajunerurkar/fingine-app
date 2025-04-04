
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  // Track which FAQ item is currently open
  activeIndex: number | null = 0;

  // Toggle FAQ item
  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  // FAQ items data
  faqs = [
    {
      question: 'Why Invest In Mutual Funds?',
      answer: 'MFs have always outperformed all other asset classes such as FD, Gold, PPF, Tax-free bond, ULIP and real estate in the long term.'
    },
    {
      question: 'What Is Fingine?',
      answer: 'Fingine is your friend helping you invest your money in the right products vis-a-vis your risk appetite.'
    },
    {
      question: 'Why Should I Invest Through Fingine?',
      answer: 'Focussing on what you are best at, leaving rest to professional can save a lot of time and effort.'
    },
    {
      question: 'Is There Any Membership Fees?',
      answer: 'We do not charge our customers for any investment (Lumpsum or SIP) in mutual funds done through our website.'
    },
    {
      question: 'How Safe And Secure Are My Investments?',
      answer: 'We provide a safe and secure investment platform with bank-grade security. We are also registered with AMFI & BSE and therefore adhere to all mandatory safety norms.'
    },
    {
      question: 'Do We Assure Any Kind Of Minimum Return?',
      answer: 'No, we don\'t. Nonetheless, historical performance may not be a guarantee for future return.'
    },
    {
      question: 'How is Fingine better than other services?',
      answer: 'Fingine is better on three fronts. First, we are completely paper-less and the experience you will have with Fingine will be unmatched. Second, we have built superior technology which allows to monitor the portfolios on a 24X7 basis. Our fee structure with all the mutual fund companies is the same and moreover it is on an all-trail basis which ensures that our incentives are aligned with yours.'
    },
    {
      question: 'Do I have to send any scans/courier any documents?',
      answer: 'Nope. We are truly paperless.'
    },
    {
      question: 'I am already KYC verified, do I have to do this process again?',
      answer: 'No. Fingine doesn\'t require you to do your KYC again. You can start investing right away if you are a KYC verified investor.'
    },
    {
      question: 'I have never invested before do I have to do special paperwork? How will you do my KYC verification?',
      answer: 'If you have never invested before, you will have to go through a process called Know Your Customer(KYC). With Fingine, this is simply taking a picture of your PAN card, Address proof and your signature on a blank piece of paper. You simply need to sit at home and we will help get this process done over a call, which takes less than 3 minutes.'
    },
    {
      question: 'What if Fingine shuts down? Do I lose my money?',
      answer: 'Your investment accounts are held directly with Mutual Fund companies and hence there is no risk of you losing money in case Fingine shuts down. You can continue to invest more or redeem from your existing investments with any particular mutual fund company. However, it won\'t be as easy as fun and as rewarding as it is with Fingine. Moreover, we are not going anywhere, we promise.'
    },
    {
      question: 'How secure is my money?',
      answer: 'Fingine takes security of all its users, their data and transactions very seriously. All our systems are bank-grade secure and we have implemented a three-tier security structure where your data is secure in all three states - on server, at client and during the transit. Moreover, your money is directly sent to reputed Mutual Fund companies without the money ever hitting Fingine\'s bank account.'
    },
    {
      question: 'How does Fingine make money?',
      answer: 'Mutual Fund companies that you invest in charge a fund-management fee also called as Total Expense Ratio (TER). Typically, TER is in the range of 25-300 bps of your investments with a mutual fund. For the facilitation and regular monitoring of your portfolio, the mutual fund companies share a proportion of TER with Fingine. Typically the fees shared with Fingine is in the range of 5-200 bps of your total investment amount'
    },
    {
      question: 'Are there any fees or charges to use Fingine?',
      answer: 'No, we don\'t charge you anything to use our Fingine app & Web.'
    },
    {
      question: 'Do I get the proof that Fingine has invested for me?',
      answer: 'Your money goes directly to mutual fund companies and an investment account, identified with a unique Folio Number is opened directly with these companies. Post successful processing of your transaction, your investment proof and folio details will always be available on Fingine dashboard. In addition, all mutual fund companies send the folio details and monthly statement on your registered email address.'
    },
    {
      question: 'How much time will it take for my investment to be processed?',
      answer: 'If you are a KYC verified investor, payment made before 1pm on a working day will be processed the same day. If the payment is made after 1pm, then your investment will be processed on the next working day (Depending upon the bank clearance). Your investment details will be available on your dashboard in one full working day after your investment has been successfully processed. If your KYC verification is pending, your investment process will begin once KYC formalities are completed. Typically, it takes about 24 hours to process your KYC from the time of you complete KYC successfully. The payment you make before we have successfully processed your KYC is held in an RBI-regulated ESCROW account. Once your KYC is successfully processed, the amount held in ESCROW is released to mutual funds for processing your investment. Your investment details will be available on your dashboard in one full working day after your investment has been successfully processed.'
    }
  ];
}