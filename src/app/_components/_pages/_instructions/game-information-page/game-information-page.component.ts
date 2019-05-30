import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game-information-page',
  templateUrl: './game-information-page.component.html',
  styleUrls: ['./game-information-page.component.css']
})
export class GameInformationPageComponent implements OnInit, OnDestroy {
  sub: any;
  computer: boolean;
  penalty: boolean;

  constructor(private myService: GameService) { }

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
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
