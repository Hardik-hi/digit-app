import { Component, OnInit } from '@angular/core';

export interface Control{
  rows: number,
  cols: number,
  altText: string
  toggled: boolean,
  iconName: string,
  color: string
};


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {


  controls: Control[] = [
    {rows: 1, cols: 1, altText: 'Pause/Play', toggled: false, iconName: 'play_arrow', color: 'black'},
    {rows: 1, cols: 1, altText: 'Reset', toggled: false, iconName: 'replay_rounded', color: 'black'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
