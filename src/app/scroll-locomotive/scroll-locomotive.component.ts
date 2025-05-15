import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const LocomotiveScroll: any;

@Component({
  selector: 'app-scroll-locomotive',
  templateUrl: './scroll-locomotive.component.html',
  styleUrls: ['./scroll-locomotive.component.css']
})
export class ScrollLocomotiveComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    const scroll = new LocomotiveScroll({
      smooth: true
    });

    console.log('Locomotive Scroll initialized:', scroll);

  }
}