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
  submit(){
    console.log("hoho" );

  }
  onChange(){
    console.log(this.checked);
  }

}