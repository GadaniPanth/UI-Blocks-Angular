import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parallex",
  templateUrl: "./parallex.component.html",
  styleUrls: ["./parallex.component.css"],
})
export class ParallexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // sections = [
  //   {
  //     image: "assets/images/parallex/lagoon-944218_1280.jpg",
  //     title: "Explore the Mountains",
  //     text: "Immerse yourself in the breathtaking views of towering peaks and serene valleys.",
  //   },
  //   {
  //     image: "assets/images/parallex/sea-5499649_640.jpg",
  //     title: "Dive into the Ocean",
  //     text: "Experience the tranquility of the deep blue sea and the rhythm of the waves.",
  //   },
  //   {
  //     image: "assets/images/parallex/zsolnay-fountain-944219_1280.jpg",
  //     title: "City Lights at Night",
  //     text: "Witness the vibrant energy of the city skyline illuminated under the night sky.",
  //   },
  //   {
  //     image: "assets/images/parallex/istockphoto-157476606-2048x2048.jpg",
  //     title: "Walk Through the Forest",
  //     text: "Stroll along peaceful pathways surrounded by lush greenery and towering trees.",
  //   },
  //   {
  //     image: "assets/images/parallex/feather-7452555_1280.jpg",
  //     title: "Adventure in the Desert",
  //     text: "Explore the vast, golden sands and the unique beauty of the desert landscape.",
  //   },
  // ];

   images = [
    'assets/images/parallex/istockphoto-157476606-2048x2048.jpg',
    'assets/images/parallex/feather-7452555_1280.jpg',
    'assets/images/parallex/zsolnay-fountain-944219_1280.jpg',
    'assets/images/parallex/sea-5499649_640.jpg',
    'assets/images/parallex/lagoon-944218_1280.jpg',
  ];
}
