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
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.grid', {
      scale: 1,
      scrollTrigger: {
        trigger: '.grid',
        start: 'bottom 0',
        end: 'top 0',
        scrub: true,
        markers: true,
        pin: true
      }
    })
  }

}
