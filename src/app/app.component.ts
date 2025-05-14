import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { MouseCursorService } from './mouse-cursor.service';  // Import MouseCursorService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  referenceUrl: string | null = null;
  version: string | null = null;

  // Variables to hold the mouse position
  mouseX: number = 0;
  mouseY: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private mouseCursorService: MouseCursorService  // Inject MouseCursorService
  ) {
    this.router.events
      .pipe(
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
      )
      .subscribe(data => {
        this.titleService.setTitle(data.title);
        this.referenceUrl = data.referenceUrl;
        this.version = data.version;
      });
  }

  ngOnInit() {
    // Subscribe to the mouse cursor's X and Y position from the service
    this.mouseCursorService.mouseX$.subscribe((x: number) => {
      this.mouseX = x;  // Update mouseX
    });

    this.mouseCursorService.mouseY$.subscribe((y: number) => {
      this.mouseY = y;  // Update mouseY
    });
  }
}
