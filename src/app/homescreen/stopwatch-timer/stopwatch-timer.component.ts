import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { TimeType } from 'src/app/time-helper.service';


@Component({
  selector: 'app-stopwatch-timer',
  templateUrl: './stopwatch-timer.component.html',
  styleUrls: ['./stopwatch-timer.component.css']
})

export class StopwatchTimerComponent implements OnInit {

  @Input() timeRemaining !: TimeType;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value:number = 100;
  timeRemainingString='';

  constructor() { }

  convertTimeToString(timeRemaining:TimeType) : string{
    let s='';

    if(timeRemaining.minutes%60<10)
      s+='0';

    s+=timeRemaining.minutes + ' : ';
    
    if(timeRemaining.seconds%60<10)
      s+='0';
    
    s+=timeRemaining.seconds%60;

    return s;
  }

  ngOnInit(): void {
    this.timeRemainingString= this.convertTimeToString(this.timeRemaining);
    this.value=100;
  }

  ngOnChanges(changes: SimpleChanges) {
    let rem=changes['timeRemaining'].currentValue;
    this.timeRemainingString = this.convertTimeToString(rem);
    this.value=(rem.minutes*60 + rem.seconds)/12;
   // window.alert(this.timeRemainingString);
  }
}
