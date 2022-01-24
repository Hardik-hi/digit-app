import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-stopwatch-timer',
  templateUrl: './stopwatch-timer.component.html',
  styleUrls: ['./stopwatch-timer.component.css']
})
export class StopwatchTimerComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 63;

  constructor() { }

  ngOnInit(): void {
  }

}
