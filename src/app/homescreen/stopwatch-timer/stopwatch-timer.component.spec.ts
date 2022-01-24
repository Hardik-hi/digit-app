import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchTimerComponent } from './stopwatch-timer.component';

describe('StopwatchTimerComponent', () => {
  let component: StopwatchTimerComponent;
  let fixture: ComponentFixture<StopwatchTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
