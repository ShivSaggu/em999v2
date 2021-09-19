import { Component } from '@angular/core';

import {DataService} from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'em999v2';

  myevents:any;

  constructor(private dataservice:DataService){

    this.dataservice.getdata().subscribe((data)=>{

      console.warn(data);
      this.myevents = data;

    })

  }



}
