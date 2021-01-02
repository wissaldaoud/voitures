import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {
  
  avions!: string[];
  constructor() {
    this.avions=["A318","Boeing 247","ARJ21","Aeronca 50"]
   }

  ngOnInit(): void {
  }

}
