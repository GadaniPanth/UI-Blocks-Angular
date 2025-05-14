import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-scrolling-page",
  templateUrl: "./scrolling-page.component.html",
  styleUrls: ["./scrolling-page.component.css"],
})
export class ScrollingPageComponent implements OnInit {
  constructor() {}

  currentSectionClass = "section-1";
  mouseX = 0;
  mouseY = 0;

  ngOnInit() {
    this.updateBackground();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.updateBackground();
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  updateBackground() {
    const sections = document.querySelectorAll(".scroll-section");
    const scrollY = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      const offsetBottom = offsetTop + section.clientHeight;

      if (scrollY >= offsetTop && scrollY < offsetBottom) {
        if (index === 0 && this.currentSectionClass !== "section-1") {
          this.currentSectionClass = "section-1";
        } else if (index === 1 && this.currentSectionClass !== "section-2") {
          this.currentSectionClass = "section-2";
        } else if (index === 2 && this.currentSectionClass !== "section-3") {
          this.currentSectionClass = "section-3";
        }
      }
    });
  }
}
