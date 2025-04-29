//6.8.4

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper, { Navigation, Pagination } from "swiper";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  images: any = [];
  swiper!: Swiper;

  constructor() { }

  ngOnInit() {
    this.images = [
      { src: 'assets/images/luxuryimg-02.jpg' },
      { src: 'assets/images/luxuryimg-04.jpg' },
      { src: 'assets/images/luxuryimg-05.jpg' },
      { src: 'assets/images/luxuryimg-06.jpg' },
      { src: 'assets/images/luxuryimg-07.jpg' },
    ]
  }

  ngAfterViewInit(): void {
    Swiper.use([Navigation]);
    Swiper.use([Pagination]);

    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      loop: true,
    });
  }

}
