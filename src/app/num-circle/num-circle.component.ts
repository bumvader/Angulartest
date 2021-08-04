import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-circle',
  templateUrl: './num-circle.component.html',
  styleUrls: ['./num-circle.component.css']
})
export class NumCircleComponent implements OnInit {

  zahl = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
