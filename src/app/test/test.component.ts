import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'courses',
        template: `
          <h2>{{ title }}</h2>
          <ul>
            <li *ngFor="let course of courses">
              {{course}}
            </li>

        </ul>
      `
})

export class TestComponent{
    title = "List of courses";
    courses;

    constructor(service: TestService){
        this.courses = service.getCourses();
    }
}