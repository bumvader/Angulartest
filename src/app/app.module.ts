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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NumCircleComponent } from './num-circle/num-circle.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    TabsComponent,
    CircleComponent,
    FunDingComponent,
    SchrittmacherComponent,
    NumCircleComponent,
    SnackbarComponent
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
    MatStepperModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
