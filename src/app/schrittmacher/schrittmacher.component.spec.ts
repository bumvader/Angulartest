import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrittmacherComponent } from './schrittmacher.component';

describe('SchrittmacherComponent', () => {
  let component: SchrittmacherComponent;
  let fixture: ComponentFixture<SchrittmacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchrittmacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchrittmacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
