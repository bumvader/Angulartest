import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['test.component.css'],
  
})

export class TestComponent implements OnInit {
  checked = false;
  checked2 = false;
  
  checkedx = false;
  checkedy = false;
  checkedz = false;

  checkedErdbeer = false;
  checkedBannane = false;
  checkedVanille = false;

  a : BooleanInput = false;
  b : BooleanInput = false;
  c : BooleanInput = false;

  text :string;
  stepName :string;
  stepPas :string;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  shake(){
    
    if(this.checkedx == true){
      this.a = true;
    }
    if(this.checkedy ==true){
      this.b = true;
    }
    if(this.checkedz == true){
      this.c = true;
    }

  }
  reset(){
    this.a = false;
    this.b = false;
    this.c = false;
    
    this.checkedx = false;
    this.checkedy = false;
    this.checkedz = false;

  }
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
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    })
  }
}