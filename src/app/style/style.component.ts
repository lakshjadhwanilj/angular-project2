import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  characters: any[] = [
    {
      actor_name: "Akshay Kumar",
      char_name: "Raju",
      gender: 'Male',
      status: 'Alive'
    },
    {
      actor_name: "Madhubala",
      char_name: "Anarkali",
      gender: 'Female',
      status: 'Dead'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
