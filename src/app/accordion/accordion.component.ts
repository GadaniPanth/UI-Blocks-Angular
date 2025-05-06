import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent implements OnInit {
  sections = [
    { title: "Section 1", content: "Content of Section 1", isOpen: false },
    { title: "Section 2", content: "Content of Section 2", isOpen: false },
    { title: "Section 3", content: "Content of Section 3", isOpen: false },
    { title: "Section 4", content: "Content of Section 4", isOpen: false },
    { title: "Section 5", content: "Content of Section 5", isOpen: false },
    { title: "Section 6", content: "Content of Section 6", isOpen: false },
    { title: "Section 7", content: "Content of Section 7", isOpen: false },
    { title: "Section 8", content: "Content of Section 8", isOpen: false },
    { title: "Section 9", content: "Content of Section 9", isOpen: false },
    { title: "Section 10", content: "Content of Section 10", isOpen: false },
  ];

  constructor() {}

  ngOnInit() {}

  // toggleContent(index: number) {
  //   this.sections[index].isOpen = !this.sections[index].isOpen;

  //   if (this.sections[index].isOpen) {
  //     setTimeout(() => {
  //       this.scrollToSection(index);
  //     }, 100);
  //   }

  toggleContent(index: number) {
    this.sections.map((tab, i) => {
      if (i == index) {
        tab.isOpen = !tab.isOpen;
      } else {
        tab.isOpen = false;
      }
    });
    
  }

  scrollToSection(index: number) {
    const element = document.getElementById("accordion-" + index);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: "smooth",
      });
    }
  }
}
