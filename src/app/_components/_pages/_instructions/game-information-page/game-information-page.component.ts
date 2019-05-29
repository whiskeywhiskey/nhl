import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game-information-page',
  templateUrl: './game-information-page.component.html',
  styleUrls: ['./game-information-page.component.css']
})
export class GameInformationPageComponent implements OnInit {

  constructor(private myService: GameService) { }

  ngOnInit() {
  }

  startGame() {
    this.myService.nextQuestion();
    this.myService.setTimer();
  }

}
