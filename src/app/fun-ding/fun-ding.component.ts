import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-ding',
  templateUrl: './fun-ding.component.html',
  styleUrls: ['./fun-ding.component.css']
})
export class FunDingComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
