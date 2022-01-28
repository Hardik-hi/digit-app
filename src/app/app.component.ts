import { Component } from '@angular/core';
import {IpcRenderer} from 'electron'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'digit';
  ipc!: IpcRenderer;
  
  constructor(){
    
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    } 
  }

  showNotif(){
    console.log("Notif shown");
    this.ipc.send('onTimerNotify');
  }
}
