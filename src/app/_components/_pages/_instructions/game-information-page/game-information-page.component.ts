import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-game-information-page',
  templateUrl: './game-information-page.component.html',
  styleUrls: ['./game-information-page.component.scss']
})
export class GameInformationPageComponent implements OnInit, OnDestroy {
  sub: any;
  computer: boolean;
  penalty: boolean;

  constructor(private myService: GameService, private soundService: SoundService) { }

  ngOnInit() {
    this.sub = this.myService.computer.subscribe(
      x => {
        this.computer = x;
      }
    );
  }

  startGame() {
    this.myService.nextQuestion();
    this.myService.setTimer();
    this.soundService.button.play();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
