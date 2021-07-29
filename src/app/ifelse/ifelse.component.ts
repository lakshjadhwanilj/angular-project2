import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  contacts: any[] = [
    {name:'Joey', email:'joey@gmail.com'},
    {name:'Chandler', email:'chandler@gmail.com'},
    {name:'Ross', email:'ross@gmail.com'}
  ]

  showAction: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
