import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // property
  title:string="Angular Basics"
  imageUrl:string="https://tse4.mm.bing.net/th/id/OIP.Klh1l7wkoG6PDPb9A5oCHQHaHa?r=0&pid=Api&h=220&P=0"
  username:string=""
  // constructor
  // methods
  showAlert(){
    alert("Button Clicked - using Event Binding")
  }

  getName(event:Event){
    const inputTag=event.target as HTMLInputElement
    this.username=inputTag.value
   
  }

  showName(ageInput:HTMLInputElement){
    alert(this.username && ageInput.value?`username is ${this.username} and Age is${ageInput.value}`:`please fill the form completely`)
    this.username=""
    
  }

}
