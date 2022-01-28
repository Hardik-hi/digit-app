import { Component, OnInit } from '@angular/core';

export interface Cards{
  title: string,
  iconName: string,
  content: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }
  cards: Cards[] =[{title: 'Blink',iconName: 'visibility_rounded',content: 'for 20 seconds'},
  {title: 'Look',iconName: 'visibility_rounded',content: '20 feet away'},
  {title: 'Brisk off',iconName: 'visibility_rounded',content: 'slow and steady'}] ;

  ngOnInit(): void {
  }

}
