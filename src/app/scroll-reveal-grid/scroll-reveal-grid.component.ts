import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

@Component({
  selector: 'app-scroll-reveal-grid',
  templateUrl: './scroll-reveal-grid.component.html',
  styleUrls: ['./scroll-reveal-grid.component.css']
})
export class ScrollRevealGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const grid = document.querySelector('.grid') as HTMLElement;

    console.log(grid);

    gsap.to('.grid', {
      scale: 1,
      scrollTrigger: {
        trigger: '.container',
        start: 'top 0',
        end: `+=${grid.scrollHeight}`,
        scrub: true,
        // markers: true,
        pin: true
      }
    })
  }

}
