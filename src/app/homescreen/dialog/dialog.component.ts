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
  cards: Cards[] =[{title: 'Blink',iconName: 'visibility_two_tone',content: 'for 20 seconds'},
  {title: 'Look',iconName: 'filter_hdr_rounded',content: '20 feet away'},
  {title: 'Walk',iconName: 'directions_walk_rounded',content: 'slow and steady'}] ;

  ngOnInit(): void {
  }

}
