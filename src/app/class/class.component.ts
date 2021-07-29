import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  Cars: any[] = [
    { name: "Ford", color: "blue" },
    { name: "BMW", color: "red" },
    { name: "Suzuki", color: "purple" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
