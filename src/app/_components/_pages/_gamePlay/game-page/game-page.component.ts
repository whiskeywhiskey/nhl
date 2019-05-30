import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit, OnDestroy {
  d: any;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q: string;

  sub: Subscription;
  computer: boolean;
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;
  sub6: Subscription;
  penalty: boolean;

  constructor(public myService: GameService) {
    this.sub = this.myService.question1.subscribe(
      x => {
        this.q1 = x;
      }
    );
    this.sub1 = this.myService.question2.subscribe(
      x => {
        this.q2 = x;
      }
    );
    this.sub2 = this.myService.question3.subscribe(
      x => {
        this.q3 = x;
      }
    );
    this.sub3 = this.myService.question4.subscribe(
      x => {
        this.q4 = x;
      }
    );
    this.sub4 = this.myService.question.subscribe(
      x => {
        this.q = x;
      }
    );
    this.sub5 = this.myService.computer.subscribe(
      x => {
        this.computer = x;
      }
    );
    this.sub6 = this.myService.penalty.subscribe(
      x => {
        this.penalty = x;
      }
    );
  }

  ngOnInit() {
    this.d = this.myService.diff;
  }


  answerClicked(e) {
    this.myService.checkAnswer(e.target.innerText);
  }

  resetGame() {
    this.myService.resetGame();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
    this.sub6.unsubscribe();
  }
}
