import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time;
  myInt;
  constructor(private myService: GameService) {

  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.time = 15;
    this.myInt = setInterval(() => {
      if (this.time !== 0) {
        this.time--;
      } else {
        this.myService.nextQuestion();
        clearInterval(this.myInt);
        this.start();
      }
    }, 1000);
  }
}
