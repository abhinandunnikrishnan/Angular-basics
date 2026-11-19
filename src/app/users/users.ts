import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Data } from '../services/data';

@Component({
  selector: 'app-users',
  imports: [DatePipe,AsyncPipe],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  todayDate=new Date()
  api=inject(Data)
  allUsers=this.api.getUserAPI()
  allTodos:any=signal([])

  ngOnInit(){
    this.getAllTodos()
  }

  getAllTodos(){
    this.api.getAllTodoAPI().subscribe({
      next:(res:any)=>{
        this.allTodos.set(res.slice(0,10))
        console.log(this.allTodos());
        
      },
      error:(reason:any)=>{
        console.log(reason);
        
      },
      complete:()=>{
        console.log("Api call completed");
        
      }
    })
  }
}
