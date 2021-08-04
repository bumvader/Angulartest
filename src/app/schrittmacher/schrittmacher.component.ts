import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schrittmacher',
  templateUrl: './schrittmacher.component.html',
  styleUrls: ['./schrittmacher.component.css']
})
export class SchrittmacherComponent implements OnInit {

  _progress = 0;

  ersteZahl: number;
  zweiteZahl: number;

  progressNext(){
    this._progress += 50;
  }
  progressBack(){
    this._progress -=50;
  }
  progressReset(){
    this._progress = 0;
  }

  beide(){
    return +this.ersteZahl + +this.zweiteZahl;
  }
  keine(){
    return +this.ersteZahl - +this.zweiteZahl;
  }
  times(){
    return +this.ersteZahl * +this.zweiteZahl;
  }
  divided(){
    return +this.ersteZahl / +this.zweiteZahl;
  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}