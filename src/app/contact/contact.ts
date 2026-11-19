import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email:string=""
  password:string=""

  showDetails(){
    alert(this.email && this.password ? `Email is ${this.email}, password is${this.password}`:`Please Fill The Form Completely`)
    this.email=""
    this.password=""
  }
  
}
