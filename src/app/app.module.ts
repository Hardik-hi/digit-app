import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomescreenComponent } from './homescreen/homescreen.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StopwatchTimerComponent } from './homescreen/stopwatch-timer/stopwatch-timer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TimeHelperService} from './time-helper.service';
import { DialogComponent } from './homescreen/dialog/dialog.component';
import { WindowRefService } from './window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    StopwatchTimerComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,  
  ],
  providers: [TimeHelperService, WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
