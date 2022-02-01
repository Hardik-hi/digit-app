import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { TimeType, TimeHelperService } from 'src/app/time-helper.service';


export interface Control {
  rows: number,
  cols: number,
  altText: string
  toggled: boolean,
  iconName: string,
  color: string,
  action: () => void;
};


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {


  //data members
  isPlayed = true;
  isDialogOpen = false;
  controls: Control[] = [
    { rows: 1, cols: 1, altText: 'Pause/Play', toggled: false, iconName: 'pause', color: 'black', action: () => { this.onPlayPause() } },
    { rows: 1, cols: 1, altText: 'Reset', toggled: false, iconName: 'replay_rounded', color: 'black', action: () => { this.onReset() } }
  ];
  timeRemaining!: TimeType;
  private _window!: any;
  intervalId!: any;

  constructor(private timeHelper: TimeHelperService, windowRef: WindowRefService) {
    //notification call
    this._window = windowRef.nativeWindow;
  }

  ngOnInit(): void {
    //getting the timeRemaining
    this.timeRemaining = this.timeHelper.getRemainingTime();
    this.intervalId = this.intervalTimer();
  }

  /* --------------Member functions---------- */

  //creates a new interval timer every 1s which monitors the changes in the timeRemaining
  intervalTimer() {

    return setInterval(() => {
      let { minutes, seconds } = this.timeRemaining;
      if (seconds > 0) {
        seconds--;
      }
      else {
        if (minutes <= 0) {
          this.onReset();
          this.showNotif();
          this.openDialog();
          return;
        }
        seconds = 59;
        minutes--;
      }
      
      this.timeRemaining = this.timeHelper.setRemainingTime({ minutes: minutes, seconds: seconds });
    }, 1000);

  }

  //called when play/pause button clicked
  onPlayPause(): void {

    if (this.isPlayed) {
      clearInterval(this.intervalId);
      this.isPlayed = false;
      this.controls[0].iconName = 'play_arrow';
    }
    else {
      this.intervalId = this.intervalTimer();
      this.isPlayed = true;
      this.controls[0].iconName = 'pause';
    }

  }

  //called when timer is reset
  onReset(): void {
    this.timeRemaining = this.timeHelper.setRemainingTime({ minutes: 20, seconds: 0 });
    clearInterval(this.intervalId);
    this.isPlayed = false;
    this.controls[0].iconName = 'play_arrow';
  }

  //opens the dialog when timer has finished
  openDialog() {
    this.isDialogOpen = (!this.isDialogOpen);
    if(!this.isDialogOpen)
      this.onPlayPause();
  }

  //to show notif, when timer is reset
  showNotif() {

    console.log("Notif shown");
    this._window.api.send("onTimerNotify", "onTimerNotify");

  }








}
