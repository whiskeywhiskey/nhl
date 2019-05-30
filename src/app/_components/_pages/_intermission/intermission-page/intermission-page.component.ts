import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-intermission-page',
  templateUrl: './intermission-page.component.html',
  styleUrls: ['./intermission-page.component.css']
})
export class IntermissionPageComponent implements OnInit, OnDestroy {
  p;
  score;
  sub: Subscription;
  sub1: Subscription;
  sub2: Subscription;
  comScore: number;
  sub3: Subscription;
  computer: boolean;
  constructor(private myService: GameService) { }

  ngOnInit() {
    this.sub = this.myService.period.subscribe(
      x => {
        this.p = x;
      }
    );

    this.sub1 = this.myService.score.subscribe(
      x => {
        this.score = x;
      }
    );
    this.sub2 = this.myService.computerScore.subscribe(
      x => {
        this.comScore = x;
      }
    );
    this.sub3 = this.myService.computer.subscribe(
      x => {
        this.computer = x;
      }
    );
  }

  continue() {
    this.myService.increasePeriod();
    this.myService.nextQuestion();
    this.myService.setTimer();
  }

  resetGame() {
    this.myService.resetGame();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
