import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll-ele',
  templateUrl: './scroll-ele.component.html',
  styleUrls: ['./scroll-ele.component.css']
})
export class ScrollEleComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const animate = (window as any).motionAnimate;
    const scroll = (window as any).motionScroll;

    if (animate && scroll) {
      document.querySelectorAll(".img-container > h2").forEach((item) => {
        scroll(
          animate(item, { opacity: [0, 0, 0, 1, 0, 0, 0, 0] }),
          {
            target: item,
            offset: ["start end", "end end", "start start", "end start"]
          }
        );
      });
    } else {
      console.error("Motion One not loaded properly.");
    }
  }
}
