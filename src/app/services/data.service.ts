import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url="https://em999-api.herokuapp.com/api/events";

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.url);
  }


}
