import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avions.model';
@Component({
  selector: 'app-add-avions',
  templateUrl: './add-avions.component.html',
  styleUrls: ['./add-avions.component.css']
})
export class AddAvionsComponent implements OnInit {
  
newAvions=   new Avion ();
  constructor() { }

  ngOnInit(): void {
  }
  addAvion(){

    console.log(this.newAvions);
    
    }
}
