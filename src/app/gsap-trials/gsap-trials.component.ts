import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-gsap-trials',
  templateUrl: './gsap-trials.component.html',
  styleUrls: ['./gsap-trials.component.css']
})
export class GsapTrialsComponent implements OnInit {

  ngOnInit(): void {

  }
}
