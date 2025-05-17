import { Component, OnInit, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-not-git',
  templateUrl: './not-git.component.html',
  styleUrls: ['./not-git.component.css']
})
export class NotGitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.horizontail_container', {
      scrollTrigger: {
        trigger: '.horizontail_container',
        start: 'top top',
        scrub: true,
        pin: true,
        // markers: true,
      },
      x: '-85%',
      ease: 'power1.inOut'
    });

    gsap.to('.varWidth', {
      width: '75vw',
      scrollTrigger: {
        trigger: '.horizontail_container',
        start: 'top 10%',
        scrub: true,
        // markers: true
      },
    });
  }

  ngAfterViewInit() {
    const rollOutElements = document.querySelectorAll('.roll-out');

    rollOutElements.forEach((el: Element) => {
      const container = el.closest('.varWidth') as HTMLElement;

      if (container) {
        // Initial state
        gsap.set(el, {
          opacity: 0,
          y: 50,
          rotateX: 90,
          transformOrigin: 'bottom center',
        });

        let hasAnimated = false;

        gsap.ticker.add(() => {
          const containerWidth = container.getBoundingClientRect().width;
          const vw = window.innerWidth;
          const containerWidthVW = (containerWidth / vw) * 100;

          if (containerWidthVW >= 45 && !hasAnimated) {
            hasAnimated = true;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1.2,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
            });
          } else if (containerWidthVW < 45 && hasAnimated) {
            hasAnimated = false;
            gsap.to(el, {
              opacity: 0,
              y: 50,
              rotateX: 90,
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        });
      }
    });
  }

}
