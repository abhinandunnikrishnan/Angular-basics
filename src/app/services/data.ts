import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  http =inject(HttpClient)

  // api call - get users: https://jsonplaceholder.typicode.com/users :api result should return to user component

  getUserAPI():Observable<any>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  }

  getAllTodoAPI(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }

}
