import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  Cars: any[] = [
    { name: "BMW", average: 12, color: "blue" },
    { name: "Ford", average: 10, color: "yellow" },
    { name: "Suzuki", average: 18, color: "silver" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
