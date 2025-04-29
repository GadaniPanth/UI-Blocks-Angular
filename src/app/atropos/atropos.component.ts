import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit
} from '@angular/core';

declare var Atropos: any;

@Component({
  selector: 'app-atropos',
  templateUrl: './atropos.component.html',
  styleUrls: ['./atropos.component.css']
})
export class AtroposComponent implements OnInit, AfterViewInit {

  atropos: any[] = [];

  @ViewChildren('atroposEl') atroposRefs!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
    this.atropos = [
      { bg: 'assets/images/atropos/atropos1.jpg', logo: 'assets/images/atropos/atropos-logo1.jpg' },
      { bg: 'assets/images/atropos/atropos2.jpg', logo: 'assets/images/atropos/atropos-logo2.jpg' },
      { bg: 'assets/images/atropos/atropos3.jpg', logo: 'assets/images/atropos/atropos-logo3.jpg' },
    ];
  }

  ngAfterViewInit() {
    this.atroposRefs.forEach((ref) => {
      Atropos({
        el: ref.nativeElement,
        shadow: true,
        highlight: false,
        rotateTouch: false,
        rotateXMax: 5,
        activeOffset: 20
      });
    });
  }
}
