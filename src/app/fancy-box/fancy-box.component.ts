//5.0.36
import { Component, OnInit } from '@angular/core';

declare const Fancybox: any;

@Component({
  selector: 'app-fancy-box',
  templateUrl: './fancy-box.component.html',
  styleUrls: ['./fancy-box.component.css']
})
export class FancyBoxComponent implements OnInit {

  constructor() { }

  images: any = [];

  ngOnInit() {
    this.images = [
      { src: 'assets/images/luxuryimg-02.jpg', thumb: 'assets/images/luxuryimg-02.jpg', caption: 'Image 1', type: 'image' },
      { src: 'assets/images/luxuryimg-04.jpg', thumb: 'assets/images/luxuryimg-04.jpg', caption: 'Image 2', type: 'image' },
      { src: 'assets/images/luxuryimg-05.jpg', thumb: 'assets/images/luxuryimg-05.jpg', caption: 'Image 3', type: 'image' },
      { src: 'assets/images/luxuryimg-06.jpg', thumb: 'assets/images/luxuryimg-06.jpg', caption: 'Image 4', type: 'image' },
      { src: 'assets/images/luxuryimg-07.jpg', thumb: 'assets/images/luxuryimg-07.jpg', caption: 'Image 5', type: 'image' }
    ]
  }

  // Fancybox.show(images, {
  //   Toolbar: {
  //     display: {
  //       right: ['slideshow', 'fullscreen', 'close']
  //     }
  //   },
  //   Carousel: {
  //     transition: "fade",
  //   },
  //   Thumbs: false,
  //   transitionEffect: "tube",
  //   animationEffect: "zoom",
  //   fit: "contain"
  // });

  ngAfterViewInit(): void {
    //can combine with swiper
    // Fancybox.bind("[data-fancybox]='gallery'", {
    //   Carousel: {
    //     transition: 'fade',
    //   },
    //   transitionEffect: "tube",
    //   animationEffect: "zoom",
    //   fit: 'contain'
    // })
  }
  showFancyBox() {
    Fancybox.show(this.images, {
      Carousel: {
        transition: "fade",
      },
      // Thumbs: false,
      transitionEffect: "tube",
      animationEffect: "zoom",
      fit: "contain",
      on: {
        initCarousel(fancybox) {
          const container = fancybox.container;
          container.addEventListener("wheel", (event) => {
            event.preventDefault();
            if (event.deltaY > 0) {
              fancybox.next();
            } else {
              fancybox.prev();
            }
          });
        }
      }
    })
  }
}