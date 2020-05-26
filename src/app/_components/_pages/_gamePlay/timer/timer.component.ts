import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  t: number;
  mySub: Subscription;

  constructor(private myService: GameService) {

  }

  ngOnInit() {
    this.mySub = this.myService.time.subscribe(
      x => {
        this.t = x;
      }
    );
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }
}
