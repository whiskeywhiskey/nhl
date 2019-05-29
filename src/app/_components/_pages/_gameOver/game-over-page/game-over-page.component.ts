import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-over-page',
  templateUrl: './game-over-page.component.html',
  styleUrls: ['./game-over-page.component.css']
})
export class GameOverPageComponent implements OnInit, OnDestroy {
  sub: Subscription;
  sub1: Subscription;
  score: number;
  correct: number;
  hatTrick: any;
  constructor(private myService: GameService) { }

  ngOnInit() {
    this.correct = this.myService.correct;
    this.hatTrick = this.myService.hatTrick;
    this.sub = this.myService.score.subscribe(
      x => {
        this.score = x;
      }
    );
  }

  resetGame() {
    this.myService.resetGame();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
