// home.component.ts
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { jarallax } from 'jarallax';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Testimonial, TestimonialSliderComponent } from '../shared/testimonial-slider/testimonial-slider.component';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, SlickCarouselModule,NgbModule,TestimonialSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  // slides = [
  //   { image: './img/hero/hero-1.png', title: 'FINGINE', description: 'Your Personal Financial Engine' },
  //   { image: './img/hero/hero_2.jpg', title: 'Smart Investing', description: 'Start investment in no time, Sign up for free!' },
  //   { image: './img/hero/hero_3.jpg', title: 'Grow Your Wealth', description: 'Make smart financial decisions with Fingine' },
  //   { image: './img/hero/hero_4.jpg', title: 'Grow Your Wealth', description: 'Make smart financial decisions with Fingine' },
  //   { image: './img/hero/hero_5.jpg', title: 'Grow Your Wealth', description: 'Make smart financial decisions with Fingine' }
  // ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear'
  };
  ngOnInit(): void {
    // Any initialization logic can go here
  }
  nfoList: NfoInfo[] = [
   
    { name: 'Axis Nifty500 Momentum 50 IndexFund', startDate: '2025-01-24', endDate: '2025-02-07' },
    { name: 'Groww Nifty 500 Momentum 50 ETF FOF', startDate: '2025-04-03', endDate: '2025-04-17' },
    { name: 'Kotak Energy Opportunities Fund', startDate: '2025-04-03', endDate: '2025-04-17' },
    { name: 'SBI Global Saver NFO', startDate: '2025-05-10', endDate: '2025-05-24' },
    { name: 'SBI Dividend Yield Fund', startDate: '2025-05-12', endDate: '2025-05-26' },
    
  ];
  ngAfterViewInit(): void {
    this.initializeCarousel();
    this.initializeJarallax();
    this.initializeTooltips();
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
  }

  private initializeCarousel(): void {
    // $(this.el.nativeElement).find('.hero-slideshow').owlCarousel({
    //   items: 1,
    //   loop: true,
    //   nav: false,
    //   dots: true,
    //   autoplay: true,
    //   autoplayTimeout: 5000,
    //   autoplayHoverPause: true,
    //   dotsContainer: '.slide-du-indicator'
    // });
  }

  private initializeJarallax(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    });
  }

  private initializeTooltips(): void {
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
  }

  slides = [
    // {
    //   fadeinupdown:'fadeInDown',
    //   image: './img/hero/hero-0.jpeg', // Path to your image
    //   title: '',
    //   titleCSS : 'title1Css',
    //   subtitle1: '',
    //   subtitle1css:'subtitle1css', 
    //   subtitle2: '',
    //   subtitle2css:'', 
    //   subtitle3: '',
    //   subtitle3css:'', 
    //   link: 'https://mf.fingine.in/finginelogin.jsp',
    //   linkText: '',
    // },
    {
      fadeinupdown:'fadeInDown',
      image: './img/hero/hero-1.png', // Path to your image
      title: 'FINGINE',
      titleCSS : 'title1Css',
      subtitle1: 'Your Personal Financial Engine',
      subtitle1css:'subtitle1css', 
      subtitle2: '',
      subtitle2css:'', 
      subtitle3: '',
      subtitle3css:'', 
      link: 'https://mf.fingine.in/finginelogin.jsp',
      linkText: 'Start investment in no time, Sign up for free!',
    },
    {
      fadeinupdown:"fadeInUp",
      image: './img/hero/hero_2.jpg',
      title: 'Take Control Of Your',
      titleCSS : 'subtitle1css',
      subtitle1: 'Retirement',
      subtitle1css: 'title1Css',
      subtitle2: 'Life',
      subtitle2css: 'title2Css',
      subtitle3: '',
      subtitle3css: '',
      linkText: 'Or Others May Control Your Life',
    },
    {
      fadeinupdown:"fadeInDown",
      image: './img/hero/hero_3.jpg', // Path to your image
      title: 'Secure Your Family Future Today',
      titleCSS : 'subtitle1css',
      subtitle1: 'Protect',
      subtitle1css: 'title1Css',
      subtitle2: 'What',
      subtitle2css: 'title2Css',
      subtitle3: 'You Love',
      subtitle3css: 'title1Css',
      linkText: 'To Stand Together Against Any Unpredictable Storm.',
    },
    {
      fadeinupdown:"fadeInDown",
      image: './img/hero/hero_4.jpg', // Path to your image
      subtitle1: 'Save',
      subtitle1css: 'title1Css',
      subtitle2: 'Taxes',
      subtitle2css: 'title2Css',
      linkText: "Don't Let Taxes Bother You",
    },
    {
      fadeinupdown:"fadeInDown",
      image: './img/hero/hero_5.jpg', // Path to your image
      title: 'Give your Children a gift of a financially secured future',
      titleCSS : 'subtitle1css',
      subtitle1: 'MAKE THE',
      subtitle1css: 'title1Css',
      subtitle2: 'JOURNEY',
      subtitle2css: 'title2Css',
      linkText: 'WORRY FREE FOR THEM',
    },
  ];

  testimonialData: Testimonial[] = [
    // --- Populate this with REAL data from Fingine Team ---
    {
      name: 'Anilkumar Dayma',
      photoUrl: './img/Testimonial/AnilDayma.jpg', // Put images in assets folder
      feedback: 'I was unsure about my retirement plans, but Fingine provided me with a clear roadmap. Their guidance has helped me maximize my savings and investments, ensuring I can retire comfortably. I truly appreciate their patience and expertise!',
      title: 'DGM - Buying and Merchandising',
      company: 'Baazar Retail Pvt Ltd'
    },
    {
      name: 'Prakash Patel',
      photoUrl: './img/Testimonial/PrakashPatel.jpg',
      feedback: 'I trust fingine completely for helping me achieve my financial goals. They are always transparent, proactive, and dedicated to my financial success. It’s reassuring to have someone so knowledgeable managing my overall portfolio.',
      title: 'Director',
      company: 'Maruti Arts'
    },
     {
      name: 'Smita Deshpande',
      photoUrl: './img/Testimonial/SmitaDeshpande.jpg',
      feedback: 'Thanks to Fingine, my investments are not only performing well but are also aligned with my long-term goals. They have a keen eye for risk management and always provide insightful recommendations. I highly recommend their services to anyone looking to grow their wealth!',
      title: 'VP',
      company: 'Alok industries'
    },
    {
      name: 'Pratik Porwal',
      photoUrl: './img/Testimonial/PratikPorwal.jpg',
      feedback: 'What sets Fingine apart is their personalized approach. They took the time to understand my financial situation, goals, and risk tolerance before crafting a customized strategy. Their expertise has brought me peace of mind and comfort.',
      title: 'Founder',
      company: 'APJ ClothingCare'
    },
    
  
    {
      name: ' Jasjiv Singh',
      photoUrl: './img/Testimonial/JasjivAnand.jpeg',
      feedback: 'I began my financial planning journey with Fingine in 2017 after disappointing experiences with bank-advised investments. Their disciplined approach to entering financial markets through mutual funds transformed my portfolio, steadily growing my holdings with strategic risk management, even lowering my income tax outflows. Quietly and consistently, Team Fingine has navigated me through market fluctuations, always staying a step ahead. I highly recommend Fingine for anyone seeking reliable and insightful financial guidance.',
      title: 'Marketing Director',
      company: 'Disney Star'
    }
  ];

  // {
  //   name: 'Dr. Pallavi Rathi',
  //   photoUrl: '/assets/images/alice.jpg',
  //   feedback: 'As someone with a complex financial portfolio, I needed a team who could provide expert insights, strategic asset allocation, and proactive risk management for my entire family portfolios. Fingine has exceeded my expectations in every way. Their ability to navigate market volatility while optimizing my investments has been truly impressive. I appreciate their deep understanding of wealth preservation and growth strategies, as well as their unwavering commitment to my financial success. With their guidance, I have full confidence in my financial future.',

  // },
}
interface NfoInfo {
  name: string;
  startDate: string; 
  endDate: string;
}