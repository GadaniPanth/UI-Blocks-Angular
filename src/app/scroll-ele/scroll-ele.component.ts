import { Component, AfterViewInit } from '@angular/core';
import Swiper, { EffectFade, Mousewheel } from 'swiper';
import { gsap } from 'gsap';

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
    Swiper.use([EffectFade]);
    Swiper.use([Mousewheel]);
    let previousIndex = 0; // Store outside the slideChange callback

    this.swiper = new Swiper(".swiper-container", {
      direction: 'vertical',
      slidesPerView: 4,
      effect: 'fade',
      spaceBetween: 500,
      speed: 800,
      fadeEffect: {
        crossFade: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        sensitivity: 1
      },
      keyboard: true,
      on: {
        slideChange: () => {
          const slides = document.querySelectorAll('.swiper-slide');
          const currentIndex = this.swiper.activeIndex;
          const direction = currentIndex > previousIndex ? 'down' : 'up';

          slides.forEach((slide, index) => {
            const h2 = slide.querySelector('h2') as HTMLElement;
            if (!h2) return;

            if (index === currentIndex) {
              gsap.fromTo(h2,
                { opacity: 0, y: direction === 'down' ? 130 : -130, delay: .5 },
                { opacity: 1, y: 0, duration: 1, ease: 'expo' }
              );
            } else {
              gsap.to(h2, {
                opacity: 0,
                y: direction === 'down' ? -50 : 50,
                duration: 1,
                ease: 'expo',
              });
            }
          });

          previousIndex = currentIndex;
        }

      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        // Handle 'up' arrow key
        this.swiper.slidePrev();
      } else if (e.key === 'ArrowDown') {
        // Handle 'down' arrow key
        this.swiper.slideNext();
      }
    });

    // const firstH2 = document.querySelector('.swiper-slide-active h2');
    // if (firstH2) {
    //   animate(firstH2, { transform: ['translateY(50px)', 'translateY(0)'] });
    // }
  }
}
