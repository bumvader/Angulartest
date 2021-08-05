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
 
  text: string;

  checkedErdbeer = false;
  checkedBannane = false;
  checkedVanille = false;

  a : BooleanInput = false;
  b : BooleanInput = false;
  c : BooleanInput = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  num = 1;
  num2 = 1;
  num3 = 1;

  cardWidth = 200
  cardHeight = 300
  cardWidth2 = 200
  cardHeight2 = 300
  cardWidth3 = 200
  cardHeight3 = 300

  email: string;
  pas: string;  

  select = false;
  select2=false;
  select3=false;

  spaket: string;
  preis: string;
  paket(){
    if(this.select == true){
      this.spaket ="basic"
      this.preis ="2 BigMac"
    }else if(this.select2 == true){
      this.spaket ="delux"
      this.preis="3 Saftige Handschläge"
    }else{
      this.spaket="mega"
      this.preis="All In"
    }
  }
  hover(){
    this.num2 = 1;
    this.num = 9;
    this.num3 = 1;
    this.cardHeight = 330
    this.cardWidth = 220
    this.cardHeight2 = 300
    this.cardWidth2 = 200
    this.cardHeight3 = 300
    this.cardWidth3 = 200

    this.select = true;
    this.select2 = false;
    this.select3 = false;
    

  }
  hover2(){
    this.num = 1;
    this.num2 = 9;
    this.num3 = 1;
    this.cardHeight = 300
    this.cardWidth = 200
    this.cardHeight2 = 330
    this.cardWidth2 = 220
    this.cardHeight3 = 300
    this.cardWidth3 = 200

    this.select = false;
    this.select2 = true;
    this.select3 = false;
  }
  hover3(){
    this.num = 1;
    this.num2 = 1;
    this.num3 = 9;
    this.cardHeight = 300
    this.cardWidth = 200
    this.cardHeight2 = 300
    this.cardWidth2 = 200
    this.cardHeight3 = 330
    this.cardWidth3 = 220
  
    this.select = false;
    this.select2 = false;
    this.select3 = true;
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