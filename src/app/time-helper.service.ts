import { Injectable } from '@angular/core';

export interface TimeType{
  minutes: number,
  seconds: number
};

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

  timeRemaining: TimeType = {
    minutes:20,
    seconds:0
  };

  constructor() {
    
   }

  getRemainingTime() : TimeType{
    return this.timeRemaining;
  }

  setRemainingTime(modifiedTime:TimeType) : TimeType{

    return modifiedTime;
  }

}
