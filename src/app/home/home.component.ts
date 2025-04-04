// home.component.ts
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { jarallax } from 'jarallax';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, SlickCarouselModule,NgbModule],
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
}