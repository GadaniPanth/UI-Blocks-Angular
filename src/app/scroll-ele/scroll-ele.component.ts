import { Component, AfterViewInit } from '@angular/core';
import Swiper, { Mousewheel } from 'swiper';

@Component({
  selector: 'app-scroll-ele',
  templateUrl: './scroll-ele.component.html',
  styleUrls: ['./scroll-ele.component.css']
})
export class ScrollEleComponent implements AfterViewInit {
  swiper!: Swiper;

  ngAfterViewInit(): void {
    const animate = (window as any).motionAnimate;
    // const scroll = (window as any).motionScroll;

    // if (animate && scroll) {
    //   document.querySelectorAll(".img-container > h2").forEach((item) => {
    //     scroll(
    //       animate(item, { opacity: [0, 0, 1, 0, 0] }),
    //       {
    //         target: item,
    //         offset: ["start end", "end end", "start start", "end start"]
    //       }
    //     );
    //   });
    // } else {
    //   console.error("Motion One not loaded properly.");
    // }

    //  Swiper.use([Navigation]);
    // Swiper.use([Pagination]);
    Swiper.use([Mousewheel]);

    this.swiper = new Swiper(".swiper-container", {
      direction: 'vertical',
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 500,
      mousewheel: {
        releaseOnEdges: true,
        sensitivity: 1
      },
      on: {
        slideChange: () => {
          const slides = document.querySelectorAll('.swiper-slide');
          slides.forEach((slide, index) => {
            const h2 = slide.querySelector('h2');
            if (h2) {
              if (index === this.swiper.activeIndex) {
                animate(h2, { opacity: 1, transform: ['translateY(50px)', 'translateY(0)'] });
              } else {
                (h2 as HTMLElement).style.opacity = '0';
              }
            }
          });
        }
      }
    });

    const firstH2 = document.querySelector('.swiper-slide-active h2');
    if (firstH2) {
      animate(firstH2, { opacity: 1, transform: ['translateY(50px)', 'translateY(0)'] });
    }
  }
}
