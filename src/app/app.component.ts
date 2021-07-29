import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi GET941 Scholars! Welcome to first angular demo';

  mymsg: string = 'Hello All'
  numberA: number = 100
  numberB: number = 200

  addTwoNumbers() {
    return this.numberA + this.numberB
  }

  getTitle():string {
    return this.title
  }

  isDisabled: boolean = true
  
  count: number = 0
  buttonClicked():void {
    this.count += 1
    console.log("Button Clicked")
  }

  today = new Date()

  fullName: string = 'Laksh'
}
