import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from './test/test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TabsComponent } from './tabs/tabs.component';
import { CircleComponent } from './circle/circle.component';
import { FunDingComponent } from './fun-ding/fun-ding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SchrittmacherComponent } from './schrittmacher/schrittmacher.component';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    TabsComponent,
    CircleComponent,
    FunDingComponent,
    SchrittmacherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatRippleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
