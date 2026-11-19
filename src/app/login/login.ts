import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email:string=""
  password:string=""
  loginRouter=inject(Router)

  login(){
    if(this.email && this.password){
      alert(`email is ${this.email} and password is ${this.password}`)
      // navigate to home page
      this.loginRouter.navigateByUrl('/')
    }else{
      alert('Fill the Form Completely')
    }
  }
}
