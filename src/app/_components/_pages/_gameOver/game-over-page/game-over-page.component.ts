import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-game-over-page',
  templateUrl: './game-over-page.component.html',
  styleUrls: ['./game-over-page.component.scss']
})
export class GameOverPageComponent implements OnInit, OnDestroy {
  sub: Subscription;
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  score: number;
  correct: number;
  hatTrick: any;
  penalties: number;
  ppg: number;
  shg: number;
  sub4: Subscription;
  computerScore: number;
  sub5: Subscription;
  computer: boolean;
  playerWin = false;
  computerWin = false;
  inspiration: string;
  constructor(private myService: GameService, private soundService: SoundService) {
    this.soundService.highVolume();
  }

  ngOnInit() {
    this.correct = this.myService.correct;
    this.hatTrick = this.myService.hatTrick;
    this.sub = this.myService.score.subscribe(
      x => {
        this.score = x;
      }
    );
    this.sub1 = this.myService.penalties.subscribe(
      x => {
        this.penalties = x;
      }
    );
    this.sub2 = this.myService.ppg.subscribe(
      x => {
        this.ppg = x;
      }
    );
    this.sub3 = this.myService.shg.subscribe(
      x => {
        this.shg = x;
      }
    );
    this.sub4 = this.myService.computerScore.subscribe(
      x => {
        this.computerScore = x;
      }
    );
    this.sub5 = this.myService.computer.subscribe(
      x => {
        this.computer = x;
      }
    );

    if (this.score >= this.computerScore) {
      this.playerWin = true;
      this.inspiration = 'Nice Job!';
    } else {
      this.computerWin = true;
      this.inspiration = 'Better luck next time!';
    }
  }

  resetGame() {
    this.myService.resetGame();
    this.soundService.button.play();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
  }

}
