import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'app-not-git',
  templateUrl: './not-git.component.html',
  styleUrls: ['./not-git.component.css']
})
export class NotGitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Horizontal scroll animation
    gsap.to('.horizontail_container', {
      scrollTrigger: {
        trigger: '.horizontail_container',
        start: 'top top',
        scrub: true,
        pin: true,
        // markers: true,
      },
      x: '-70%',
      ease: 'power1.inOut'
    });

    // Width expansion animation
    gsap.to('.varWidth', {
      width: '55vw',
      scrollTrigger: {
        trigger: '.horizontail_container',
        start: 'top 10%',
        scrub: true
      },
    });
  }
}
