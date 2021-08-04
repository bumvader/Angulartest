import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDingComponent } from './fun-ding.component';

describe('FunDingComponent', () => {
  let component: FunDingComponent;
  let fixture: ComponentFixture<FunDingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunDingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
