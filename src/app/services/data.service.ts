import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url="https://em999-api.herokuapp.com/api/events";

  url2="https://jsonplaceholder.typicode.com/todos";

  url3="https://cors-anywhere.herokuapp.com/https://em999-api.herokuapp.com/api/events";

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.url3);
  }


}
