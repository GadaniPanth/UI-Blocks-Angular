import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const LocomotiveScroll: any;
import gsap from 'gsap';

@Component({
  selector: 'app-scroll-locomotive',
  templateUrl: './scroll-locomotive.component.html',
  styleUrls: ['./scroll-locomotive.component.css']
})
export class ScrollLocomotiveComponent implements OnInit, AfterViewInit {
  scroll: any;
  lastScrollY = 0;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.scroll = new LocomotiveScroll({
      // el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });

    this.scroll.on('scroll', () => {
      const images = document.querySelectorAll('img');
      const windowHeight = window.innerHeight;

      images.forEach((img: Element) => {
        const rect = img.getBoundingClientRect();
        const distanceFromCenter = Math.abs((rect.top + rect.height / 2) - (windowHeight / 2));
        const maxScale = 1.2;
        const minScale = 1;
        const scale = maxScale - (distanceFromCenter / windowHeight / 2);
        const clampedScale = Math.max(minScale, Math.min(maxScale, scale));

        gsap.to(img, {
          scale: clampedScale,
          duration: 1,
          ease: "power2.out"
        });
      });
    });
  }
}