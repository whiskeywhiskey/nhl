import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit, OnDestroy {
  d: any;

  constructor(public myService: GameService) {
    this.myService.question1.subscribe(
      x => {
        this.q1 = x;
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
}
