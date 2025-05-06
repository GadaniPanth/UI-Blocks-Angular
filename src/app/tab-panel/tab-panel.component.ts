import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab-panel",
  templateUrl: "./tab-panel.component.html",
  styleUrls: ["./tab-panel.component.css"],
})
export class TabPanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  activeTab = "tab1";

  tabs = [
    {
      id: "tab1",
      label: "Tab 1",
      title: "Content for Tab 1",
      content: "This is the content for the first tab.",
      align: "left",
    },
    {
      id: "tab2",
      label: "Tab 2",
      title: "Content for Tab 2",
      content: "This is the content for the second tab.",
      align: "left",
    },
    {
      id: "tab3",
      label: "Tab 3",
      title: "Content for Tab 3",
      content: "This is the content for the third tab.",
      align: "left",
    },
  ];

  selectTab(tabId: string) {
    this.activeTab = tabId;
  }
}
