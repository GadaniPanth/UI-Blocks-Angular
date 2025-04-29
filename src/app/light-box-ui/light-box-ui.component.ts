//2.0.0

import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-light-box-ui',
  templateUrl: './light-box-ui.component.html',
  styleUrls: ['./light-box-ui.component.css']
})
export class LightBoxUiComponent implements OnInit {

  constructor(private _lightbox: Lightbox, private _lightboxconfig: LightboxConfig) {
    _lightboxconfig.showImageNumberLabel = true;
  }

  images: any = [];

  ngOnInit() {
    this.images = [
      { src: 'assets/images/luxuryimg-02.jpg', caption: 'Image 1', thumb: 'assets/images/luxuryimg-02.jpg' },
      { src: 'assets/images/luxuryimg-04.jpg', caption: 'Image 2', thumb: 'assets/images/luxuryimg-04.jpg' },
      { src: 'assets/images/luxuryimg-05.jpg', caption: 'Image 3', thumb: 'assets/images/luxuryimg-05.jpg' },
      { src: 'assets/images/luxuryimg-06.jpg', caption: 'Image 4', thumb: 'assets/images/luxuryimg-06.jpg' },
      { src: 'assets/images/luxuryimg-07.jpg', caption: 'Image 5', thumb: 'assets/images/luxuryimg-07.jpg' },
    ]
  }

  open(index: number): void {
    this._lightbox.open(this.images, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
