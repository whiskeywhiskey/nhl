import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit, OnDestroy {

  constructor(public game: GameService, private soundService: SoundService) {
    game.nextQuestion();
    game.setTimer();
  }

  ngOnInit() {
  //  this.d = this.myService.diff;
  }


  answerClicked(e) {
   // this.myService.checkAnswer(e.target.innerText);
  }


  on() {
   // document.getElementById('overlay').style.display = 'block';
  }

  off() {
   // document.getElementById('overlay').style.display = 'none';
  }

  resetGame() {
   // this.myService.resetGame();
   // this.soundService.button.play();
  }

  ngOnDestroy() {
   // this.sub.unsubscribe();
   // this.sub1.unsubscribe();
   // this.sub2.unsubscribe();
   // this.sub3.unsubscribe();
   // this.sub4.unsubscribe();
   // this.sub5.unsubscribe();
   // this.sub6.unsubscribe();
   // this.sub7.unsubscribe();
  }
}
