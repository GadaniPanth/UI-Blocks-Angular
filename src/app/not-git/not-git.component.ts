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

  ngOnInit() { }

  ngAfterViewInit() {

    gsap.registerPlugin(ScrollTrigger);

    const horizontalTween = gsap.to('.horizontail_container', {
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


    const rollOutElements = document.querySelectorAll('.roll-out');

    rollOutElements.forEach((el: Element) => {
      gsap.fromTo(el,
        {
          opacity: 0,
          y: 50,
          rotateX: 90,
          transformOrigin: 'bottom center',
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: .8,
          ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
          scrollTrigger: {
            trigger: el,
            containerAnimation: horizontalTween,
            start: 'left 30%',
            end: 'right center',
            toggleActions: 'play play play reverse',
            // markers: true
          }
        }
      );
    });
  }
}
