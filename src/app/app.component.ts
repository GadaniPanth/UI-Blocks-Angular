import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import gsap from 'gsap';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('overlayAnimation', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('100ms ease')),
      transition('visible => hidden', animate('.8s ease', style({ transform: 'translateY(-100%)' }))),
    ]),
    trigger('overlayAnimation2', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('100ms .05s ease')),
      transition('visible => hidden', animate('1s .3s ease', style({ transform: 'translateY(-100%)' }))),
    ]),
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('.8s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  referenceUrl: string | null = null;
  version: string | null = null;

  overlayState: 'hidden' | 'visible' = 'hidden';
  private navigationInProgress = false;

  private xTo!: (value: number) => void;
  private yTo!: (value: number) => void;

  private mouseMoveHandler = (e: MouseEvent) => {
    this.xTo(e.clientX);
    this.yTo(e.clientY);
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    // Listen to router events for overlay animation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.navigationInProgress = true;
        this.showOverlay();
      }

      if (event instanceof NavigationEnd) {
        this.navigationInProgress = false;
        // Small delay so overlay slide-out is visible
        setTimeout(() => this.hideOverlay(), 200);
      }
    });

    // Update page title and other metadata on NavigationEnd
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let current = this.route.root;
        while (current.firstChild) {
          current = current.firstChild;
        }
        return {
          referenceUrl: current.snapshot.data['referenceUrl'] || null,
          version: current.snapshot.data['version'] || null,
          title: current.snapshot.data['title'] || 'Multiple Angular Preview',
        };
      })
    ).subscribe(data => {
      this.titleService.setTitle(data.title);
      this.referenceUrl = data.referenceUrl;
      this.version = data.version;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRoute.snapshot.routeConfig.path;
  }

  ngOnInit() {
    // Cursor initial setup
    gsap.set('.cursor-circle', { xPercent: -50, yPercent: -50 });

    this.xTo = gsap.quickTo('.cursor-circle', 'x', { duration: 0.6, ease: 'power3' });
    this.yTo = gsap.quickTo('.cursor-circle', 'y', { duration: 0.6, ease: 'power3' });

    window.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  ngAfterViewInit(): void {
    const interactiveElements = document.querySelectorAll(`
      h1, h2, h3, h4, h5, h6,
      p, span, li, a, button,
      img, input, textarea, label, .content, .ref_url, .swiper_slide, .swiper-button-prev, .swiper-button-next, .nav-item
    `);

    interactiveElements.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to('.cursor-circle', {
          width: '42px',
          height: '42px',
          backgroundColor: 'transparent',
          duration: 0.3
        });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to('.cursor-circle', {
          width: '12px',
          height: '12px',
          backgroundColor: 'cyan',
          duration: 0.3
        });
      });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  showOverlay() {
    this.overlayState = 'visible';
  }

  hideOverlay() {
    this.overlayState = 'hidden';
  }
}
