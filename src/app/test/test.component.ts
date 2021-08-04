import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['test.component.css']
})

export class TestComponent {
  checked = false;
  checked2 = false;
  text :string;
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
  buttonChange(){
  }
}