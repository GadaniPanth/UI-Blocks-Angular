import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  referenceUrl: string | null = null;
  version: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
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
  }
}