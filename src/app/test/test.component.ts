import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['test.component.css']
})

export class TestComponent implements OnInit {
  checked = false;
  checked2 = false;
  text :string;
  isLinear = false;
  firstFormControl: FormGroup;
  secondFormControl: FormGroup;
  submit(){

    console.log(this.text);
    if(this.checked == true && this.checked2 == true){
      console.log("teenager");
    }else{
      console.log("nicht teenager");
    }
  }
  onChange(){
    console.log(this.checked);
  }
  onChange2(){
    console.log(this.checked2);
  }
  constructor(private _formBuilder: FormBuilder){}
  ngOnInit(){
    this.firstFormControl = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormControl = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }
}